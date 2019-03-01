import { Component, OnInit,ViewChild } from '@angular/core';
import {CentroCustoModel} from '../model/centro-custo.model';
import { CentroCustoService } from "../services/centro-custo.service";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-centro-de-custo',
  templateUrl: './centro-de-custo.component.html',
  styleUrls: ['./centro-de-custo.component.scss']
})
export class CentroDeCustoComponent implements OnInit {

  @ViewChild("form")
  form: NgForm;

  costCenter = new CentroCustoModel();
  moneyBase:number;
  msgsRegister = [];
  constructor(private costService: CentroCustoService) { }

  ngOnInit() {
  }

  registerCash(){
    this.msgsRegister = [];
    this.costCenter.description = "Montante mensal";
    // "{'name': 'Dinheiro','base_date':'2019-02-12 15:59:12','base':'2895.88','description':'Mont salário mensal'}"
    
    this.costService.create(this.costCenter).toPromise().then(res => {

        if(res === "CREATED"){
            this.form.reset();
            this.msgsRegister.push({severity:'success', summary:'Atenção', detail:'Centro de custo criado com sucesso'});
        }
        
      }).catch(err => {
        this.form.reset();
        this.msgsRegister.push({severity:'error', summary:'Atenção', detail:'Um erro ocorreu durante o registro, tente novamente.'});
        console.log(err);
    });
    
  }

}
