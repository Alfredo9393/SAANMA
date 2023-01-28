import { Component, OnInit,Input } from '@angular/core';
import { ICarouselIem } from '../../interfase/icarousel.item.metadata';

@Component({
  selector: 'app-carousel-indicators',
  templateUrl: './carousel-indicators.component.html',
  styleUrls: ['./carousel-indicators.component.scss']
})
export class CarouselIndicatorsComponent implements OnInit {
  // defaultImage = "../../../assets/imagen/sections-default-image.png";
  // defaultImage = "../../../assets/imagen/fondo-blanco.png";
  defaultImage = "../../../assets/imagen/manzana.jpg";

  

  @Input() heigth=500;
  @Input() isfullScreen=true;
  @Input() items:ICarouselIem[] =[];

  public finalHeight:string | number =0
  public currentPosition =0

  constructor() { 
    this.finalHeight = this.isfullScreen? '100vh': `${this.heigth}px`
  }

  ngOnInit() {
    this.items.map( (i,index) =>{
      i.id =index;
      i.marginLeft=0;
    })
  }

  setCurrentPosition(position:number){
    this.currentPosition=position

    console.log("setBack filtro "+ this.items.find(i=>i.id === 0 )?.marginLeft);

    this.items.find(element => {
      if(element.id == 0){
        element.marginLeft=-100 * position;
      }
    })

    // this.items.find(i=>i.id === 0).marginLeft = -100 * position
  }

  setNext(){
    let finalPercentage =0
    let nextPosition =this.currentPosition + 1
    if(nextPosition <= this.items.length-1){
      finalPercentage=-100 *nextPosition
    }else{
      nextPosition=0
    }

    console.log("setNext filtro "+ this.items.find(i=>i.id === 0 )?.marginLeft);

    this.items.find(element => {
      if(element.id == 0){
        element.marginLeft=finalPercentage;
      }
    })

      // this.items.find(i=>i.id === 0 ).marginLeft=finalPercentage

    this.currentPosition=nextPosition
  }

  setBack(){
    let finalPercentage =0
    let backPosition =this.currentPosition - 1 
    if(backPosition >= 0){
      finalPercentage = -100 * backPosition
    }else{
      backPosition=this.items.length-1
      finalPercentage = -100 *backPosition
    }


    console.log("setBack filtro "+ this.items.find(i=>i.id === 0 )?.marginLeft);

    this.items.find(element => {
      if(element.id == 0){
        element.marginLeft=finalPercentage;
      }
    })

    // this.items.find(i=>i.id === 0 ).marginLeft=finalPercentage
    
    
    this.currentPosition=backPosition
  }
  

  
}
