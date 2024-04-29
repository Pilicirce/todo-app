import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { v4 as uuid }from 'uuid';

@Injectable({
  providedIn: 'root'
})

//let miId = uuid();

export class TasksService {
  public tasks: Array<Task> = [
    //otra forma de declarar el array: Task[]
    {
      id: uuid(),
      description: 'Inicializar aplicación TO-DO',
      isCompleted: true,
    },
    {
      id: uuid(),
      description: 'Crear modulo TO-DO',
      isCompleted: false,
    },
    {
      id: uuid(),
      description: 'Actualizamos modulo App',
      isCompleted: false,
    },
    {
      id: uuid(),
      description: 'Crear primer componente',
      isCompleted: false,
    },
    {
      id: uuid(),
      description: 'Crear componenten para lista y formulario',
      isCompleted: false,
    },
    {
      id: uuid(),
      description: 'Finalizar aplicación',
      isCompleted: false,
    },
  ];

  constructor() { }

  public deleteTask(id: string): void {
    //this.tasks.splice(index, 1);  //esto de "splice"  reemplaza o elimina un elemento de un array 
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  
  public completeTask(id: string): void {
   //this.tasks[index].isCompleted = !this.tasks[index].isCompleted; 
    //esto es para que se ponga en true si es false y vice versa 
    const index = this.tasks.findIndex(task => task.id === id);
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
    
  }
  
  public addTask(task:Task): void {
    const newTask: Task = {id: uuid(), ...task};
   this.tasks.push(newTask);

  }
}
