import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {DataHeardService} from '../../../service/data-heard.service'

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss']
})
export class Header1Component implements OnInit {

  constructor( private dataHeardService: DataHeardService ) { }

  onFilterTextBoxChanged() {
    var value = (document.getElementById('filter-text-box') as HTMLInputElement).value;
    this.dataHeardService.dataFilter=value;
    this.dataHeardService.emiteEvent.emit(value)
  }


  ngOnInit(): void {
  }

}
