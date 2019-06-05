import { Injectable } from '@angular/core';
import {Task} from './Task';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  tasks: Task[] = [];
  completed: Task[] = [];

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  getCompleted(): Observable<Task[]> {
    return of(this.completed);
  }
  addTask(args: any[]): void {
    this.tasks.push(new Task(args));
  }
  completeTask(i: number): void {
    this.completed.push(this.tasks[i]);
    this.tasks.splice(i, 1);
  }
  deleteTask(i: number, completed: boolean): void {
    if (completed) {
      this.completed.splice(i, 1);
    } else {
      this.tasks.splice(i, 1);
    }
  }
  uncompleteTask(i: number) {
    this.tasks.push(this.completed[i]);
    this.completed.splice(i, 1);
  }


}
