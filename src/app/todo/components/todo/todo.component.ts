import { Component, inject } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  

  //se puede inyectar dependencias de estas dos formas:
  //private tasksService = inject(TasksService);
  constructor(private tasksService: TasksService) {} 

  get tasks(): Array<Task> {
    return this.tasksService.tasks;
  }


public onDeleteTask(index: number): void {
  //this.tasks.splice(index, 1);  //esto de "splice"  reemplaza o elimina un elemento de un array
  this.tasksService.deleteTask(index);
}

public onCompleteTask(index:number): void {
  //this.tasks[index].isCompleted = !this.tasks[index].isCompleted; 
  //esto es para que se ponga en true si es false y vice versa
  this.tasksService.completeTask(index);
}

public onNewTask(task:Task): void {
  //this.tasks.push(task);
  this.tasksService.addTask(task);
}

}
