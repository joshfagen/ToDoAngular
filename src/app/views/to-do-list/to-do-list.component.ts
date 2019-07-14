import { Component, OnInit } from '@angular/core';
import {ToDoService} from '../../models/to-do.service';
import {MatBottomSheet} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Task} from '../../models/Task';
import {AddTaskComponent} from '../add-task/add-task.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  tasks: Task[];
  completed: Task[];
  constructor(private toDoServ: ToDoService,
              private dialog: MatDialog,
              private sheet: MatBottomSheet) { }

  ngOnInit() {
    this.toDoServ.getTasks().subscribe(res => this.tasks = res);
    this.toDoServ.getCompleted().subscribe(res => this.completed = res);
  }


  addSheet(): void {
  this.sheet.open(AddTaskComponent);
  }

  // Function to move task to complete
  complete(i: number) {
    this.toDoServ.completeTask(i);
  }

  // Function to delete task
  delete(i: number, completed) {
    if(completed) {
      this.toDoServ.deleteTask(i, completed);
    } else {
      this.toDoServ.deleteTask(i, false);
    }
  }

  // Function to toggle emergency property
  toggleEmerg(i) {
    if (this.tasks[i].urgent) {
      this.tasks[i].urgent = false;
    } else {
      this.tasks[i].urgent = true;
    }
  }
  // Function to move a completed task back to to-do list
  uncomplete(i: number) {
    this.toDoServ.uncompleteTask(i);
  }
}
