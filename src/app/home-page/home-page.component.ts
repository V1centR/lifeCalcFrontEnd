import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  items;
  gastarMoney:number;
  saldo:number = 10000;
  currentGasto: number = 0;
  limite: number;
  alertMessage: string;
  setColorMessage: string;

  ngOnInit() {
  
    this.setLimit();
    this.setColorMessage = "badge-warning";
    this.alertMessage = "Fique atento ao seu limite diário!"
}

  execGastar(){

    console.log("Gasto: " + this.gastarMoney);

    this.saldo = this.saldo -= this.gastarMoney;
    this.currentGasto = this.currentGasto += this.gastarMoney;

    if(this.currentGasto >= this.limite){
      this.alertMessage = "Você atingiu seu limite diário!";
      this.setColorMessage = "badge-danger";
    } else {
      this.alertMessage = "Fique atento ao seu limite diário!"
    }

    this.gastarMoney = null;
  }

  setLimit(){
    this.limite = 18.50;

  }

  getSaldo(){


  }

  setMEssage(){

  }

}
