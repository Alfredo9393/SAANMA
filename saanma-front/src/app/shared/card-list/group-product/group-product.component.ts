import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-product',
  templateUrl: './group-product.component.html',
  styleUrls: ['./group-product.component.scss']
})
export class GroupProductComponent implements OnInit {
  cardData:string[]=["hola","que","tal","adap1","adap2","adap3","adap4","adap5","adap6","adap7","adap8",];

  constructor() { }

  ngOnInit(): void {
  }

}
