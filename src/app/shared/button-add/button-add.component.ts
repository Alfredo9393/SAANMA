import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent implements OnInit {
  @Input() name:string ='default';

  constructor() { }

  ngOnInit(): void {
  }

}
