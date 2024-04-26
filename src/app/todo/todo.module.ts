import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';
import { ListComponent } from './components/list/list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';



@NgModule({
  declarations: [
    TodoComponent,
    ListComponent,
    AddTaskComponent
  ],
  
  exports: [
    TodoComponent
  ],

  imports: [
    CommonModule, 
    FormsModule,
  ]
})
export class TodoModule { }
