
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { IProducts } from '../interface/products.metadata';

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

    public products(): Observable <IProducts[]> {
      const url = `${environment.url}/products`;
      return this.http.get<IProducts[]>(url);
    }


    public setEmployees(data:any): Observable<any>  {
      const url = `${environment.url}/employees/alfredo`;
      return this.http.post(url, data, this.httpOptions);
    } 
  

}