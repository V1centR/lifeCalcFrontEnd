import { Component, OnInit,ViewChild } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {CategoryService} from '../services/category.service';
import {CentroCustoService} from '../services/centro-custo.service';
import {Categoria} from '../model/categoria.model';
import {Operation} from '../model/operation.model';
import { Produto } from '../model/produto.model';
import {OperationService} from '../services/operation.service';
import {NgForm} from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @ViewChild("form")
  form: NgForm;

  constructor(private operation: OperationService, private catService: CategoryService, private centerCostService: CentroCustoService) { }

  items;
  gastarMoney:number;
  saldo:number = 10000;
  currentGasto: number = 0;
  limite: number;
  alertMessage: string;
  setColorMessage: string;
  categories: SelectItem[];
  categoria: Categoria;
  operartion = new Operation();
  selecione = [];
  msgsRegister = [];
  msgsStatus = [];
  retroRegister:boolean = false;
  retroCheck;
  centerCostLimit: number;

  //percentual já retirado do centerCostLimit
  percentualExit:number;
  
  costAvailable = [];

  typeDispend:string;

  ngOnInit() {
  
    this.getToday();
    this.setLimit();
    this.getCategories();
    this. getCenterCosts();

    console.log(this.numDaysInMonth());
}

  retroCheckValid(){
    console.log(this.retroCheck);
    //retroRegister
    this.retroCheck == true ? this.retroRegister = true : this.retroRegister = false;
    
  }

  execGastar(){

    this.saldo = this.saldo -= this.gastarMoney;
    this.currentGasto = this.currentGasto += this.gastarMoney;

    this.retroCheck == true ? this.operartion.retro = formatDate(this.operartion.retro,"shortTime","pt-BR") : this.operartion.retro = "null";
    console.log(this.operartion);

    this.operation.save(this.operartion).toPromise().then(res => {
      
      if (res === "CREATED") {
        this.form.reset();
        this.msgsRegister.push({severity:'success', summary:'Atenção', detail:'Despesa criada com sucesso'});
        this.getToday();
        this. getCenterCosts();
      }

    }).catch(err => {
      this.msgsRegister.push({severity:'error', summary:'Atenção', detail:'Não foi possível criar a despesa.'});
    });

    this.gastarMoney = null;
  }

  getCategories(){

    this.catService.findAll().toPromise().then(res => {
      this.selecione = res;
      this.selecione.unshift({"id":0,"name":"Selecione"});
      this.categories = this.selecione;
     
    }).catch(err => {
      this.msgsRegister.push({severity:'error', summary:'Atenção', detail:'Não foi possível carregar todas as categorias.'});
    });
  }

  getToday(){
    this.operation.findByToday().toPromise().then(res => {
      this.currentGasto = res[0];
    }).catch(err => {
      this.msgsRegister.push({severity:'error', summary:'Atenção', detail:'Não foi possível carregar os valores diários.'});
    });

  }

  async getCenterCosts(){

   await this.centerCostService.getLastCostCenter("Dinheiro").toPromise().then(res => {

      console.log(res);
      //global set here
      this.centerCostLimit = res['base'];

      //Set msg daily limit
      this.limite = this.centerCostLimit/this.numDaysInMonth();

      this.percentualExit = (this.currentGasto/this.limite)*100;
      this.setMessagesPercent(this.percentualExit);

      console.log("Percentual gasto hoje:: " + this.percentualExit);
        
      res ? this.costAvailable.push({"name":res['name'],"id":res['id']}) : null;

    }).catch(err => {
      console.log(err);
    });

    console.log(this.costAvailable);
   
  }

  setMessagesPercent(percent:number){

    /*
    critério: Centro de custo dividido por dias do mês 30 ou 31
    $1200 / 31dias = 38,70 diários
    38,70 = 3.22% de $1200
    ProvaReal: 3.22*31 = 99.82 perto de 100%
    */

    this.msgsStatus = [];

    percent == 0 ? this.msgsStatus.push({severity:'success', summary:'Impressionante!', detail:'Você não gastou nada hoje!.'}) : null;
    percent > 0.1 && percent <= 20 ? this.msgsStatus.push({severity:'info', summary:'Atenção', detail:'Fique atento ao seu limite!.'}) :null;
    percent > 20.1 && percent <= 30 ? this.msgsStatus.push({severity:'info', summary:'Atenção', detail:'Fique atento ao seu limite.'}) : null;
    percent > 30.1 && percent <= 49 ? this.msgsStatus.push({severity:'info', summary:'Atenção', detail:'Você esta quase na metade de seu limite!'}) :null;
    percent >= 50.0 && percent <= 50.9 ? this.msgsStatus.push({severity:'warn', summary:'Atenção', detail:'Vc atingiu metade de seu limite fique atento!'}) :null;
    percent >= 60 && percent <= 70.9 ? this.msgsStatus.push({severity:'warn', summary:'Atenção', detail:'Você já ultrapassou metade de seu limite diário'}) :null;
    percent >= 80 && percent <= 99.9 ? this.msgsStatus.push({severity:'warn', summary:'Atenção', detail:'Seu limite esta quase no fim!'}) :null;
    percent >=100 && percent <= 109.9 ? this.msgsStatus.push({severity:'error', summary:'Atenção', detail:'Você atingiu seu limite diário'}) :null;
    percent >=110 && percent <= 119.9 ? this.msgsStatus.push({severity:'error', summary:'Atenção', detail:'Limite diário ultrapassado, cessar gastos imediatamente'}) :null;
    percent >=200 && percent <= 299.9 ? this.msgsStatus.push({severity:'error', summary:'Atenção', detail:'Limite diário ultrapassado, seu orçamento está comprometido'}) :null;
    percent > 300 ? this.msgsStatus.push({severity:'error', summary:'Atenção', detail:'Limite diário ultrapassado, seu centro de custo tem desfalque!'}) :null;
   
  }

  numDaysInMonth(){

    let year = new Date().getFullYear();
    let month = new Date().getMonth()+1;

    return new Date(year, month, 0).getDate();
  }

  setLimit(){

    //percentual descoberto
    //21,60 é quantos porcento de 180?
    //calculo: (21,60/180) * 100 = 12

    this.centerCostLimit;

    
    

    this.limite = 18.50;

  }

  getSaldo(){
    

  }

}
