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

  ngOnInit() {

    this.items = [
      {label: 'Home', icon: 'fa fa-fw fa-home'},
      {label: 'Categorias', icon: 'fa fa-fw fa-list'},
      {label: 'Produtos', icon: 'fa fa-fw fa-cube'},
      {label: 'Centro de Custos', icon: 'fa fa-fw fa-bank'},
      {label: 'Gastos', icon: 'fa fa-fw fa-dollar'},
      {label: 'Relatórios', icon: 'fa fa-fw fa-pie-chart'}
  ];
  }

  execGastar(){

    console.log("Gasto: " + this.gastarMoney);

    this.saldo = this.saldo -= this.gastarMoney;

    this.gastarMoney = null;
  }

  getSaldo(){


  }

}
