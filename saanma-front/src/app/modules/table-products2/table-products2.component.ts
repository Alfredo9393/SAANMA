import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

import {Router} from '@angular/router';
import {EmployedService} from '../services/employees-list.service'
import { IProducts } from '../interface/products.metadata';


@Component({
  selector: 'app-table-products2',
  templateUrl: './table-products2.component.html',
  styleUrls: ['./table-products2.component.scss']
})
export class TableProducts2Component implements OnInit {

  public rowData: any[] | null = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];
  public columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  constructor(private employedService:EmployedService,private router: Router) {
  }

  ngOnInit() {
    // this.getProducts();
  }
 
  onGridReady(params: GridReadyEvent) {
    params.api.sizeColumnsToFit();
    window.addEventListener('resize', function () {
      setTimeout(function () {
        params.api.sizeColumnsToFit();
      });
    });

    params.api.sizeColumnsToFit();
  }


}
