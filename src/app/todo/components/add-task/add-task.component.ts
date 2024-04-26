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
    this.onNewTask.emit(this.task);
    this.task = {
      description: '',
      isCompleted: false,
    };
  }

}
