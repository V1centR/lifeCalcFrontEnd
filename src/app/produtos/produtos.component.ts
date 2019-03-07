import { Component, OnInit } from '@angular/core';
import {Produto} from './produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  constructor() { }
  categories = [];
  name: string;
  prod = new Produto;

  ngOnInit() {
    //TODO colocar icones nas opções
    
  }

  register(){

    console.log("Dados:: " + JSON.stringify(this.prod));

  }

}
