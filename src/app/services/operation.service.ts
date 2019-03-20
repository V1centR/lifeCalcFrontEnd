import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  LC_API:string = "http://192.168.50.76:8080/api";

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.LC_API}/op/all`);
  }

  findByDate(date): Observable<any> {
    console.log(date);
    return this.http.post(`${this.LC_API}/op/search`,date);
  }

  findByMonthRange(date): Observable<any> {
    console.log("findByMonthRange" + date.startDate);
    return this.http.post(`${this.LC_API}/op/month-range`,date);
  }

  findByOneDate(date): Observable<any> {
    console.log(date);
    return this.http.post(`${this.LC_API}/op/byday`,date);
  }

  save(data): Observable<any> {
    return this.http.post(`${this.LC_API}/op/insert`,data);
  }

  findByToday(){
    return this.http.get(`${this.LC_API}/op/daily`);
  }

}
