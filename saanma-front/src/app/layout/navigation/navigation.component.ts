import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  uri:string = "/module/component/listProduct";

  constructor(private router: Router) { 
    console.log("navigation 123");
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.uri=this.router.url.replace(/\d+/g, ''); //se elimina si tiene numeros, esto para los path que tienen parametro 

    console.log();
    console.log(this.router.url);

    console.log("navigation 123");
  }

  ngOnInit(): void {
  }

  

}
