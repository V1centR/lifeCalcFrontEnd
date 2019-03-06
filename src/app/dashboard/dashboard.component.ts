import { Component, OnInit, ViewChild } from '@angular/core';
import {DashboardService} from '../services/dashboard.service';
import {OperationService} from '../services/operation.service';
import { Categoria } from '../model/categoria.model';
import { Operation } from '../model/operation.model';
import { formatCurrency, formatDate } from '@angular/common';
import {NgForm} from '@angular/forms';

interface dateRange{
  startDate:string;
  finalDate:string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


    @ViewChild("reportForm")
    reportForm: NgForm;

  data: any;
  dailyChart: any;
  monthRangeChart:any;

  categoria:any;
  meses;
  month:number = 12;
  totalDays:number;
  totalValue:number;
  transActionMessage;

  startDate;
  finalDate;
  
  //storage values total for day
  valuesForDay:any[];
  valuesForMultipleDay:any;
  //values sommed for day
  sumValues:number = 0;
  currentDay:Operation;
  fullValue:number = 0;
  percentLost:number = 0;
  initialMontant:number = 4000;
  centroCusto:any[];
  options: any;
  chartGraph:boolean = false;
  chartDailyGraph:boolean = false;
  dayInputForm:boolean = false;
  datarange:boolean = true;
  dayInput;

  setColor:string = '';
  typeReportDaily;
  typeReportMonth;
  daySelected;
  totalDispends:number = 0;

  typeReport:string;

  inputReportDaily:boolean= false;
  inputReportWeek:boolean = false;
  displayMonthRange:boolean = false;

  typeReportWeek;

  constructor(private dashService: DashboardService, private opService: OperationService) {}

  ngOnInit() {

    // this.dashService.findAllCategory().subscribe(res => {
    //     console.log(res);
    //     this.categoria = res;
    // });
   // this.months();

  }

//   makeLineChart(){

//     this.data = {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [
//             {
//                 label: 'First Dataset',
//                 data: [65, 59, 80, 81, 56, 55, 40],
//                 fill: false,
//                 borderColor: '#4bc0c0'
//             },
//             {
//                 label: 'Second Dataset',
//                 data: [28, 48, 40, 19, 86, 27, 90],
//                 fill: false,
//                 borderColor: '#565656'
//             }
//         ]
//     }

//   }

setFormMonth(event){

    this.dayInputForm = false;
    this.datarange = true;

}

  months(){
      

    this.opService.findAll().subscribe(res => {
        
        this.categoria = res;

        let dateKey = 0;
        let dateItem = 0;
        let dateMonth: number;
        this.valuesForDay = [];
        let dates = [];
        this.centroCusto = [];
        let centroCustoControl:number = 0;
        let centroCustoTotal:number = 0;

        this.categoria.forEach(element => {
           
            //console.log(element);

            console.log(element['centroCustoBean']);

           // centroCustoControl == element['centroCustoBean']['id'] || !centroCustoControl ? centroCustoTotal+= : false;
            

            let timeStamp = new Date(element['date']);

            dateItem = timeStamp.getDate();
            dateMonth = timeStamp.getMonth();
            dateMonth = dateMonth+1;
            this.fullValue += element['value'];

            !dateKey ? dateKey = timeStamp.getDate() : false;
            dateKey == dateItem ? this.sumValues+=element['value'] : false;
            dateKey != dateItem ? this.valuesForDay.push( parseFloat(Number.parseFloat(this.sumValues.toString()).toFixed(2)) ) : false;
            dateKey != dateItem ? this.sumValues = 0 : false;
            dateKey != dateItem ? dates.push(dateKey +"/"+ dateMonth) : false;

            dateKey = timeStamp.getDate();
            centroCustoControl =  element['centroCustoBean']['id'];
        });

        this.percentLost = ((this.fullValue/this.initialMontant)*100);
        this.setColorStatus(this.percentLost);

        this.data = {
            labels: dates,
            datasets: [
                {
                    label: 'Dispends for day',
                    data: this.valuesForDay,
                    fill: false,
                    borderColor: '#4bc0c0'
                    //ff3b00 vermelho 
                }
            ]
        }
    });
  }//close months

  setColorStatus(percentLost){
    percentLost <= 50 ? this.setColor = "#0059ff" : false; //azul 
    percentLost >= 51 && percentLost <= 99 ? this.setColor = "#ff832b" : false;
    percentLost >= 100 && percentLost <= 150 ? this.setColor = "#6b008e" : false;
    percentLost >= 151 ? this.setColor = "#ff0505" : false; //red
    
  }

  weeks(){

     //somar semanas
    //resumir gasto por semana

  }//close weeks


   async getDynamicChart(){
        
        console.log(this.typeReport);
        console.log(this.typeReportMonth);

        let dateRange;

        let startDateFormat = this.fetchData(this.startDate,"-");
        let finalDateFormat = this.fetchData(this.finalDate,"-");

        dateRange = new Object();
        dateRange.startDate = startDateFormat;
        dateRange.finalDate = finalDateFormat;
        
        //limit range
        let one_day= 1000*60*60*24;
        let dayDiff =  Date.parse(this.finalDate) - Date.parse(this.startDate);

        if(this.typeReport == "daily"){

            let oneDay = this.fetchData(this.dayInput,"-");
            let daySelected;
            daySelected = new Object();
            daySelected.oneDay = oneDay;

            this.opService.findByOneDate(daySelected).subscribe(res => {                
                this.makeDailyChart(res);
            });
        }
            
        await this.opService.findByMonthRange(dateRange).toPromise().then(res => {
            
            console.log("RES 1:: " + res);
            
            //this.typeReport == "month" ? this.makeMonthChart(res) : false;
            this.typeReport == "month" ? this.eachMonthChart(res) : false;
        });

        // if((dayDiff/one_day) >=31){
        //     this.limitExceed();
        // }else{

        // }
    }

    eachMonthChart(res){

        console.log("eachMonthChart VVV");
        console.log(res);

        let values = [];
        let monthLabel = [];

        this.displayMonthRange = true;
        this.chartDailyGraph = false;
        this.chartGraph = false;

        res.forEach(element => {
            
            let timeStamp = new Date(element['date']);
            let valueData = element['total'];

            monthLabel.push(element['date']);
            values.push(valueData);
        });

        //Graphic here
        this.monthRangeChart = {
            labels: monthLabel,
            datasets: [
                {
                    label: 'Relatório por mês',
                    backgroundColor: '#42A5F5',
                    data: values,
                    fill: false,
                    //borderColor: '#4bc0c0'
                    //ff3b00 vermelho 
                }
            ]
        };

        this.options = {
            title: {
                // display: true,
                // text: 'Transactions',
                // fontSize: 16
            },
            legend: {
                display: true,
                position: 'bottom'
            },
            scales: {
                yAxes: [{
                ticks: {
                    beginAtZero: true
                }
                }]
            }
        };

        this.reportForm.reset();

    }

    changeForm(event){

        console.log(this.typeReport);
        
        //typeReport
        this.typeReport == "daily" ? this.dayInputForm = true : this.dayInputForm = false;
        this.typeReport == "daily" ? this.datarange = false : this.datarange = true;
    }

    makeWeekChart(){

    }

    makeDailyChart(res){

        let hourLine = [];
        let values = [];
        this.totalDispends = 0;
        this.fullValue = 0;

        this.daySelected = this.fetchData(this.dayInput,"-");

        this.chartDailyGraph = true;

        res.forEach(element => {
            let timeStamp = new Date(element['date']);
            let hour = formatDate(timeStamp,"hh:mm",'en-US');
            let valueData = element['value'];

            this.totalDispends += parseFloat(element['value']);
            this.fullValue += element['value'];

            hourLine.push(hour);
            values.push(valueData);
        });

        this.percentLost = ((this.fullValue/this.initialMontant)*100);

        //Graphic here
        this.dailyChart = {
            labels: hourLine,
            datasets: [
                {
                    label: 'Daily dispends',
                    data: values,
                    fill: false,
                    borderColor: '#4bc0c0'
                    //ff3b00 vermelho 
                }
            ]
        };

        this.options = {
            title: {
                // display: true,
                // text: 'Transactions',
                // fontSize: 16
            },
            legend: {
                display: true,
                position: 'bottom'
            },
            scales: {
                yAxes: [{
                ticks: {
                    beginAtZero: true
                }
                }]
            }
        };

        this.reportForm.reset();
    }

    makeMonthChart(res){

        let dateRange;
        this.chartDailyGraph = false;

        let startDateFormat = this.fetchData(this.startDate,"-");
        let finalDateFormat = this.fetchData(this.finalDate,"-");

        dateRange = new Object();
        dateRange.startDate = startDateFormat;
        dateRange.endDate = finalDateFormat;

        this.categoria = res;

        console.log("RESULT VV");
        console.log(this.categoria);
        console.log(this.categoria.length);


            let dateKey = 0;
            let dateItem = 0;
            let dateMonth: number;
            this.valuesForMultipleDay = [];
            let dates = [];
            this.centroCusto = [];
            let centroCustoControl:number = 0;
            let centroCustoTotal:number = 0;
            this.fullValue = 0;

            this.categoria.forEach(element => {

                let timeStamp = new Date(element['date']);

                dateItem = timeStamp.getDate();
                dateMonth = timeStamp.getMonth();
                dateMonth = dateMonth+1;
                this.fullValue += element['value'];

                console.log("DateMonth:: " + dateItem);
                console.log("dateKey:: " + dateKey);

                console.log( "Value:: " + parseFloat(Number.parseFloat(this.sumValues.toString()).toFixed(2)));

                !dateKey ? dateKey = timeStamp.getDate() : false;
                dateKey == dateItem ? this.sumValues += element['value'] : false;
                dateKey != dateItem ? this.valuesForMultipleDay.push( parseFloat(Number.parseFloat(this.sumValues.toString()).toFixed(2)) ) : false;
                dateKey != dateItem ? this.sumValues = 0 : false;
                dateKey != dateItem ? dates.push("Mês " + dateMonth) : null;

                dateKey != dateItem ? console.log("New array") : console.log("Add new item");
            

                console.log("sumValues:: " + this.sumValues);
                

                dateKey = timeStamp.getDate();
                console.log("valuesForMultipleDay VVV");
                console.log(this.valuesForMultipleDay);
                
                // centroCustoControl = element['centroCustoBean']['id'];
            });

            this.percentLost = ((this.fullValue/this.initialMontant)*100);
            this.setColorStatus(this.percentLost);

            console.log("Values VV");
            console.log(this.valuesForMultipleDay);

            console.log("Dates VV");
            console.log(dates);
            
            

            this.data = {
                labels: dates,
                datasets: [
                    {
                        label: 'Dispends for day',
                        data: this.valuesForMultipleDay,
                        fill: false,
                        borderColor: '#4bc0c0'
                        //ff3b00 vermelho 
                    }
                ]
            };

            this.options = {
                title: {
                    // display: true,
                    // text: 'Transactions',
                    // fontSize: 16
                },
                legend: {
                    display: true,
                    position: 'bottom'
                },
                scales: {
                    yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                    }]
                }
            };

            this.reportForm.reset();
            this.transActionMessage = [];
            this.chartGraph = true;
            
            if(res.length === 0 || !res){
                this.transActionMessage = [];
                this.transActionMessage.push({severity:'warn', summary:'Atenção!', detail:'Não há dados para os critérios informados.'});
                this.chartGraph = false;
            }

    }// close makeMonthChart

  fetchData(date,mode:string){

    let dateStr = new Date(date);
    let mes:string = (dateStr.getMonth()+1).toString();
    let dia:string = dateStr.getDate().toString();
    let ano:number =  dateStr.getFullYear();
    //apply zero
    mes.length < 2 ? mes = "0"+mes : mes;
    dia.length < 2 ? dia = "0"+dia : dia;

    //let formatedDate:string = dia+mode+mes+mode+ano;
    let formatedDate:string = ano+mode+mes+mode+dia;
    
    return formatedDate;
}

    limitExceed(){
        this.transActionMessage = [];
        this.transActionMessage.push({severity:'warn', summary:'Atenção!', detail:'Limite de dias excedidos "max 31 dias".'});
    }

    emptyCheckbox(){
        this.transActionMessage = [];
        this.transActionMessage.push({severity:'warn', summary:'Atenção!', detail:'Marque uma das opções "Diário, Semanal, Mensal ou Anual".'});
    }
  

}
