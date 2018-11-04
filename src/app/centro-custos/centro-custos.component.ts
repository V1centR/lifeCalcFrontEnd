import { Component, OnInit } from '@angular/core';
import {CentroCustos} from './centro-custos';

@Component({
  selector: 'app-centro-custos',
  templateUrl: './centro-custos.component.html',
  styleUrls: ['./centro-custos.component.scss']
})
export class CentroCustosComponent implements OnInit {

  cost = new CentroCustos;
  constructor() { }

  ngOnInit() {
  }

  register(){
    console.log("Dados:: " + JSON.stringify(this.cost));
  }

}
