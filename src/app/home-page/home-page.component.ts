import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  items;
  ngOnInit() {

    this.items = [
      {label: 'Categorias', icon: 'fa fa-fw fa-list'},
      {label: 'Produtos', icon: 'fa fa-fw fa-cube'},
      {label: 'Centro de Custos', icon: 'fa fa-fw fa-bank'},
      {label: 'Gastos', icon: 'fa fa-fw fa-dollar'},
      {label: 'Relatórios', icon: 'fa fa-fw fa-pie-chart'}
  ];
  }

}
