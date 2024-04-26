import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public list: Array<Task> = [];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  @Output()
  public onComplete: EventEmitter<number> = new EventEmitter();

  public delete(index: number): void {
    this.onDelete.emit(index);
    console.log(index); //esto es solo para comprobar que los indices se estan mandando bien
  }

  public complete(index: number):void {
    this.onComplete.emit(index);
  }
}
