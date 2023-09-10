import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {EmployedService} from '../services/employees-list.service'

import { IpropertiesBtnTask } from '../interface/IpropertiesBtnTask.metadata';
import { MatTableDataSource } from '@angular/material/table';
import { IPendingTask } from '../interface/IPendingTask.metadata';

// import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-pending-task',
  templateUrl: './pending-task.component.html',
  styleUrls: ['./pending-task.component.scss']
})
export class PendingTaskComponent implements OnInit {
  rowData: IPendingTask[] = [];

  activaBtn: IpropertiesBtnTask ={activePending:true,activeInProcess:false,activeSuccess:false,disabled:true};



  constructor(private employedService:EmployedService) {}

  ngOnInit() {
    this.getPendingTaks();
  }

  getPendingTaks(){
    this.employedService.getPendingTaks().subscribe(data=>{
      console.log("Response pending list: " );
      this.rowData = data;
      console.log(this.rowData);
    })
  }


}

