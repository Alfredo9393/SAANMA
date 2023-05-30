import {AfterViewInit, Component, ViewChild} from '@angular/core';

// material
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {EmployedService} from '../services/employees-list.service'
import { IProducts } from '../interface/products.metadata';
import {Router} from '@angular/router';



@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.scss']
})
export class TableProductsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'supplier', 'product', 'content', 'price', 'lastUpdate'];

  value = '';

  @ViewChild(MatPaginator) paginator :any = MatPaginator;
  @ViewChild(MatSort) sort: MatSort =new MatSort;

  dataProducts: Array<IProducts> = [] 

  dataSource = new MatTableDataSource<IProducts>;

  constructor(private employedService:EmployedService,private router: Router) {
    // console.log("pagina2");
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // console.log(this.router.url);
    // console.log("pagina2");
  }

  ngAfterViewInit() {
    this.getProducts();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getProducts(){
    this.employedService.products().subscribe(data=>{
      console.log("Response:");
      this.dataProducts = data;
      console.log(this.dataProducts);

       this.dataSource = new MatTableDataSource(this.dataProducts);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;

    })
  }


}
