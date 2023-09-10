import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-title-center',
  templateUrl: './title-center.component.html',
  styleUrls: ['./title-center.component.scss']
})
export class TitleCenterComponent implements OnInit {
  @Input() title:string ='Titulo custom';

  constructor() { }

  ngOnInit(): void {
  }

}
