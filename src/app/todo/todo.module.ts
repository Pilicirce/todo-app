import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';



@NgModule({
  declarations: [
    TodoComponent
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
