import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { Observable } from 'rxjs';

import {Router} from '@angular/router';
import {EmployedService} from '../services/employees-list.service'
import { IProducts } from '../interface/products.metadata';

import {
  ColDef,
  FirstDataRenderedEvent,
  GridReadyEvent,
  GridSizeChangedEvent,
  IDateFilterParams
} from 'ag-grid-community';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
import { IOlympicData } from '../interface/IOlympicData.metadata';



@Component({
  selector: 'app-table-products1',
  templateUrl: './table-products1.component.html',
  styleUrls: ['./table-products1.component.scss']
})
export class TableProducts1Component implements OnInit {
  rowData: IOlympicData[] = [];
  gridApi: any;
  gridColumnApi: any;

  public defaultColDef: ColDef = {
    // editable: true,
    sortable: true,
    // flex: 1,
    // minWidth: 100,
    filter: true,
    floatingFilter: true,
    
    resizable: true,
  };

 

  constructor(private employedService:EmployedService) {
  }

  ngOnInit() {
    // this.getProducts();
  }

  // floatingFilterComponentParams: {suppressFilterButton: true}

  public columnDefs: ColDef[] = [
    { 
      field: 'athlete', minWidth: 150,  
      suppressMenu: true, // dasabilita el menu filtro en el header de la columna
      floatingFilterComponentParams: {
        suppressFilterButton: true, // dasabilita el icono filtro del lado derecho de la caja texto de filtro
      },  

      getQuickFilterText: params => {
        return params.value.name;
      }

    },
    { field: 'age', minWidth: 70,maxWidth: 90,
      suppressMenu: true, // dasabilita el menu filtro en el header de la columna
      floatingFilterComponentParams: {
        suppressFilterButton: true, // dasabilita el icono filtro del lado derecho de la caja texto de filtro
      },
    },
    { field: 'country', minWidth: 130,
      suppressMenu: true, // dasabilita el menu filtro en el header de la columna
      floatingFilterComponentParams: {
        suppressFilterButton: true, // dasabilita el icono filtro del lado derecho de la caja texto de filtro
      },  
    },
    { field: 'year', minWidth: 70, maxWidth: 90, 
      suppressMenu: true, // dasabilita el menu filtro en el header de la columna
      floatingFilterComponentParams: {
        suppressFilterButton: true, // dasabilita el icono filtro del lado derecho de la caja texto de filtro
      },  
    },
    { field: 'date', minWidth: 120,
      suppressMenu: true, // dasabilita el menu filtro en el header de la columna
      filter: 'agDateColumnFilter', //filtro fecha
      filterParams: dateFilterParams, //filtro fecha
      floatingFilterComponentParams: {
        suppressFilterButton: true, // dasabilita el icono filtro del lado derecho de la caja texto de filtro
      },
    },
    { field: 'sport', minWidth: 120,
      suppressMenu: true, // dasabilita el menu filtro en el header de la columna
      floatingFilterComponentParams: {
        suppressFilterButton: true, // dasabilita el icono filtro del lado derecho de la caja texto de filtro
      },    
    },
    { field: 'gold', minWidth: 80 ,
      suppressMenu: true, // dasabilita el menu filtro en el header de la columna
      floatingFilterComponentParams: {
        suppressFilterButton: true, // dasabilita el icono filtro del lado derecho de la caja texto de filtro
      },    
    },
    { field: 'silver', minWidth: 80,
      suppressMenu: true, // dasabilita el menu filtro en el header de la columna
      floatingFilterComponentParams: {
        suppressFilterButton: true, // dasabilita el icono filtro del lado derecho de la caja texto de filtro
      },    
    },
    { field: 'bronze', minWidth: 80,
      suppressMenu: true, // dasabilita el menu filtro en el header de la columna
      floatingFilterComponentParams: {
        suppressFilterButton: true, // dasabilita el icono filtro del lado derecho de la caja texto de filtro
      },  
    },
    { field: 'total', minWidth: 80,
      filter: false // desabilita caja de texto de filtro 
    },
  ];




  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.sizeColumnsToFit();
  }

  onGridSizeChanged(params: GridSizeChangedEvent) {
    // get the current grids width
    var gridWidth = document.getElementById('grid-wrapper')!.offsetWidth;
    // keep track of which columns to hide/show
    var columnsToShow = [];
    var columnsToHide = [];
    // iterate over all columns (visible or not) and work out
    // now many columns can fit (based on their minWidth)
    var totalColsWidth = 0;
    var allColumns = params.columnApi.getColumns();
    if (allColumns && allColumns.length > 0) {
      for (var i = 0; i < allColumns.length; i++) {
        var column = allColumns[i];
        totalColsWidth += column.getMinWidth() || 0;
        if (totalColsWidth > gridWidth) {
          columnsToHide.push(column.getColId());
        } else {
          columnsToShow.push(column.getColId());
        }
      }
    }
    // show/hide columns based on current grid width
    params.columnApi.setColumnsVisible(columnsToShow, true);
    params.columnApi.setColumnsVisible(columnsToHide, false);
    // fill out any available space to ensure there are no gaps
    params.api.sizeColumnsToFit();
  }



  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api; // se agrego esto por que se ocupa para filtro global
    this.getProducts();
  }

  getProducts(){

    this.employedService.olympicWinners().subscribe(data=>{
      console.log("Response: " );
      console.log(data);
      this.rowData = data;
      console.log(this.rowData);
      // console.log(this.dataProducts);

      //  this.dataSource = new MatTableDataSource(this.dataProducts);
      //  this.dataSource.paginator = this.paginator;
      //  this.dataSource.sort = this.sort;

    })
  }


  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(
      (document.getElementById('filter-text-box') as HTMLInputElement).value
    );
  }


}


var dateFilterParams: IDateFilterParams = {
  comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
    var dateAsString = cellValue;
    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split('/');
    var cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
    return 0;
  },
};