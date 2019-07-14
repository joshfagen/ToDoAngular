import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './views/to-do-list/to-do-list.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import {
  MatBottomSheetModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatListModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import {AddTaskComponent} from './views/add-task/add-task.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddTaskComponent]
})
export class AppModule { }
