import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Operation} from '../model/operation.model';
import {Categoria} from '../model/categoria.model';

//ng g service services/dashboard
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  LC_API:string = "http://192.168.50.76:8080/api";

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<any> {
    return this.http.get(`${this.LC_API}/distributor`);
  }

  findAllCategory(): Observable<any> {
    return this.http.get(`${this.LC_API}/cat/all`);
  }

  create(distributor: Operation): Observable<any> {

    if(distributor.id != undefined){
      console.log("update");
      return this.http.put(`${this.LC_API}/distributor`, distributor);
    }

    return this.http.post(`${this.LC_API}/distributor`, distributor);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.LC_API}/distributor/${id}`);
  }

  update(distributor: Operation): Observable<any> {
    return this.http.put(`${this.LC_API}/distributor`, distributor);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.LC_API}/distributor/${id}`);
  }
}
