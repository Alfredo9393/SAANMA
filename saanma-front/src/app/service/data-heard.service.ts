import { Injectable,Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHeardService {
  dataFilter:string="data inicial"

  constructor() { }

  @Output() emiteEvent : EventEmitter<any> = new EventEmitter();

}
