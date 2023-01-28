
import { Component, OnInit } from '@angular/core';
import data from '../../../assets/data/products-saanma.json'
import {IProductPreview} from '../../interfase/IProductPreview.metadata'


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  defaultImage = "../../../assets/imagen/sections-default-image.png";
  public cardData:IProductPreview[] = data;
  
  constructor() {
  }

  ngOnInit() {
  }


}
