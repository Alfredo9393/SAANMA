import { Component, OnInit,Input } from '@angular/core';
import {IProductPreview} from '../../../interfase/IProductPreview.metadata'


@Component({
  selector: 'app-card-list-product',
  templateUrl: './card-list-product.component.html',
  styleUrls: ['./card-list-product.component.scss']
})
export class CardListProductComponent implements OnInit {
  @Input() imageUrl:string ='../../../assets/imagen/sections-default-image.png';
  @Input() cardData:IProductPreview[] =[];

  defaultImage = "../../../assets/imagen/sections-default-image.png";
  constructor() {
  }

  ngOnInit() {
  }

}
