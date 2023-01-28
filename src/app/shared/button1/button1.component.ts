import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-button1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.scss']
})
export class Button1Component implements OnInit {
  @Input() name:string ='default';

  constructor() { }

  ngOnInit(): void {
  }

}
