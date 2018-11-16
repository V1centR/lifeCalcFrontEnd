import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit {

  alertMessage:string;
  constructor() { }

  ngOnInit() {

    this.alertMessage = "Uma cópia deste relatório será enviado no seu email."
  }

}
