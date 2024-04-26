import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    TodoComponent,
    ListComponent
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
