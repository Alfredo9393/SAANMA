
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { IProducts } from '../interface/products.metadata';
import { IOlympicData } from '../interface/IOlympicData.metadata';
import { IPendingTask } from '../interface/IPendingTask.metadata';


@Injectable({
  providedIn: 'root'
})
export class EmployedService  {

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    constructor(private http:HttpClient){
    }

    // public products(): Observable <any> {
    //   const url = `${environment.url}/products`;
    //   console.log("endpoint : " +url )
    //   return this.http.get(url);
    // }


    public getPendingTaks(): Observable <IPendingTask[]> {
      // const url = `https://adapmocks.free.beeceptor.com/getTask`;
      const url = `../../../assets/data/pendingTask.json`;
      return this.http.get<IPendingTask[]>(url);
      // return this.http.get<IPendingTask[]>(url);

    }

    public products(): Observable <IProducts[]> {
      const url = `${environment.url}/products`;
      return this.http.get<IProducts[]>(url);
    }


    public setEmployees(data:any): Observable<any>  {
      const url = `${environment.url}/employees/alfredo`;
      return this.http.post(url, data, this.httpOptions);
    } 
  
    public olympicWinners(): Observable<IOlympicData[]>  {
      const url = `https://www.ag-grid.com/example-assets/olympic-winners.json`;
      return this.http.get<IOlympicData[]>(url)
    } 
}