import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  constructor() { }
  categories = [];
  name: string;

  ngOnInit() {
    //TODO colocar icones nas opções
    this.categories = [
      {name : "Recarga celular", code: 99},
      {name : "Transporte", code: 97},
      {name : "Alimentação", code: 96},
      {name : "Bebida", code: 95},
      {name : "Junk Food", code: 94},
      {name : "Eletrônicos", code: 92},
      {name : "Prioridade", code: 91},
      {name : "Aluguel", code: 90},
      {name : "Contas a pagar", code: 89},
    ];
  }

}
