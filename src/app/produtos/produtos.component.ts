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
    
  }

}
