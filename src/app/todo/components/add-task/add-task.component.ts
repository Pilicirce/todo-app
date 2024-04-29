import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'todo-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output()
  public onNewTask: EventEmitter<Task> = new EventEmitter();

  public task: Task = {
    description: '',
    isCompleted: false,
  };
  
  emitTask(): void {
    if(this.task.description.length === 0 ) return;
    
    this.onNewTask.emit(this.task);
    this.task = {  //aqui task se puede mantener sin id (porque ya dijimos que era opcional)
      description: '',
      isCompleted: false,
    };
  }

}
