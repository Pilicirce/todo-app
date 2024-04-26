import { Component } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

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
      description: 'Finalizar aplicaciónS',
      isCompleted: false,
    },
  ];
}
