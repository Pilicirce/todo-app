import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
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

  constructor() { }

  public deleteTask(index: number): void {
    this.tasks.splice(index, 1);  //esto de "splice"  reemplaza o elimina un elemento de un array 
    
  }
  
  public completeTask(index:number): void {
   this.tasks[index].isCompleted = !this.tasks[index].isCompleted; 
    //esto es para que se ponga en true si es false y vice versa 
    
  }
  
  public addTask(task:Task): void {
   this.tasks.push(task);

  }
}
