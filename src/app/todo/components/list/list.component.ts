import { Component, Input } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public list: Array<Task> = [];
}
