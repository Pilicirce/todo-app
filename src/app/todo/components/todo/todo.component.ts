import { Component, inject } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  public tasks: Array<Task> = [
    //otra forma de declarar el array: Task[]
    {
      description: 'Inicializar aplicación TO-DO',
      isCompleted: true,
    },
    {
      description: 'Crear modulo TO-DO',
      isCompleted: false,
    },
    {
      description: 'Actualizamos modulo App',
      isCompleted: false,
    },
    {
      description: 'Crear primer componente',
      isCompleted: false,
    },
    {
      description: 'Crear componenten para lista y formulario',
      isCompleted: false,
    },
    {
      description: 'Finalizar aplicación',
      isCompleted: false,
    },
  ];


  //se puede inyectar dependencias de estas dos formas:
  //private todoService = inject(TasksService);
  constructor(private tasksService: TasksService) {}

public onDeleteTask(index: number): void {
  this.tasks.splice(index, 1);  //esto de "splice"  reemplaza o elimina un elemento de un array
  
}

public onCompleteTask(index:number): void {
  this.tasks[index].isCompleted = !this.tasks[index].isCompleted; 
  //esto es para que se ponga en true si es false y vice versa
  
}

public onNewTask(task:Task): void {
  this.tasks.push(task);
}

}
