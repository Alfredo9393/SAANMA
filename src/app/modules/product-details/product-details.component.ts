import { Component, OnInit } from '@angular/core';
import {ICarouselIem} from '../../interfase/icarousel.item.metadata'
import { dummy_data } from './data.const';

import { IProductPreview } from '../../interfase/IProductPreview.metadata';
import dataProduct from '../../../assets/data/products-saanma.json'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public carouselData:ICarouselIem[] = dummy_data;

  currentProduct:IProductPreview = {
    id: "",
    title: "",
    description: "",
    imageUrl: "http://loremflickr.com/640/480/city",
    precioMenudeo: "",
    contenidoMenudeo: "",
    precioMayoreo: "",
    contenidoMayoreo: "",
    sabor:"",
    detallesMayoreo:"", 
    unidadMedida:"",
    precioMayoreFrio:"",
    precioMayoreAltiempo:"",
    sabores: []
};



  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("parametro adap: "+ id);

    this.currentProduct = dataProduct.filter(element => element.id ===id )[0];


    // this.currentProduct = dataProduct.filter((m: { id: number; }) =>m.id == Number(id)  )[0];
    console.log(this.currentProduct);
  }

}