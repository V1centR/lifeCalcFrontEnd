import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categoria} from '../model/categoria.model'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  LC_API:string = "http://192.168.50.76:8080/api";

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.LC_API}/cat/all`);
  }

  create(categoria: Categoria): Observable<any> {

    if(categoria.id != undefined){
      console.log("update");
      return this.http.put(`${this.LC_API}/cat/insert`, categoria);
    }
    return this.http.post(`${this.LC_API}/cat/insert`, categoria);
  }

  findAllCategory(): Observable<any> {
    return this.http.get(`${this.LC_API}/cat/all`);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.LC_API}/distributor/${id}`);
  }
}
