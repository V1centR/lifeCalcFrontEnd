import { Component, OnInit,ViewChild } from '@angular/core';
import {CategoryService} from '../services/category.service';
import {Categoria} from '../model/categoria.model';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoriService: CategoryService) { }

  @ViewChild("form")
  form: NgForm;


  categoria = new Categoria();
  msgsRegister = [];


  ngOnInit() {
    this.getCategories();
  }

  register(){

    console.log(this.categoria);
    this.msgsRegister = [];

    this.categoriService.create(this.categoria).toPromise().then(res => {

      if (res == "CREATED") {
        this.form.reset();
        this.msgsRegister.push({severity:'success', summary:'OK!', detail:'Item registrado com sucesso'});
        //this.getCategories();
        //this. getCenterCosts();
      }

    }).catch(err => {

      this.msgsRegister.push({severity:'err', summary:'ERROR!', detail:'Tente novamente.' + err});

    });

    
  }

  getCategories(){

    this.categoriService.findAll().toPromise().then(res => {
      console.log(res);

    }).catch();

  }

}
