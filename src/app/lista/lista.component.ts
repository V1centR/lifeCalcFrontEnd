import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  users$: Object;
  
  constructor(private data: DadosService) { }

//  getData is a function into dados.service.ts
  ngOnInit() {
    this.data.getData().subscribe(
      data => this.users$ = data
    );
  }
}
