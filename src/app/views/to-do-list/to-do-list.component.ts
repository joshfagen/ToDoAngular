import { Component, OnInit } from '@angular/core';
import {ToDoService} from '../../models/to-do.service';
import {MatBottomSheet} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Task} from '../../models/Task';

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

  addDialog() {

  }

  editDialog(i: number) {

  }
  // Function to move task to complete
  complete(i: number) {
    this.toDoServ.completeTask(i);
  }

  // Function to delete task
  delete(i: number, completed) {
    this.toDoServ.deleteTask(i, completed);
  }

  // Function to move a completed task back to to-do list
  uncomplete(i: number) {
    this.toDoServ.uncompleteTask(i);
  }
}