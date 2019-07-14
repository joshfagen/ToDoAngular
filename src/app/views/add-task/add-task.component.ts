import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import {ToDoService} from '../../models/to-do.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  title: string;
  details: string;
  deadline: Date;
  urgent: boolean;
  today = new Date();
  constructor(
    private sheet: MatBottomSheetRef,
    private toDoServ: ToDoService
  ) { }

  ngOnInit() {
  }
  addTask() {
    const info = {
      title: this.title,
      details: this.details,
      deadline: this.deadline,
      urgent: this.urgent
    };
    console.log(info);
    this.toDoServ.addTask(info);
  }

}
