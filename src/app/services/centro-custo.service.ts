import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CentroCustoModel } from "../model/centro-custo.model";

@Injectable({
  providedIn: 'root'
})
export class CentroCustoService {


  LC_API:string = "http://192.168.50.105:8080/api";

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.LC_API}/cost-center/all`);
  }

  create(costCenter: CentroCustoModel): Observable<any> {

    if(costCenter.id != undefined){
      console.log("update");
      return this.http.put(`${this.LC_API}/cost-center/insert`, costCenter);
    }
    return this.http.post(`${this.LC_API}/cost-center/insert`, costCenter);
  }

  getLastCostCenter(typeCost:string){
    return this.http.get(`${this.LC_API}/cost-center/last/${typeCost}`);
  }
  
}
