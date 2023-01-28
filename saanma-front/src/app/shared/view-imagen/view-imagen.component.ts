import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-view-imagen',
  templateUrl: './view-imagen.component.html',
  styleUrls: ['./view-imagen.component.scss']
})
export class ViewImagenComponent implements OnInit {
  @Input() imageUrl:string ='../../../assets/imagen/sections-default-image.png';

  constructor() { }

  ngOnInit(): void {
  }

}
