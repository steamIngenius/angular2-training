import { Component } from '@angular/core';
import { ToDoService } from './todo.service';

@Component({
  selector: 'my-todo',
  template:  `
    <input type="text" placeholder="Input a Task"
      (input)="inputDetector($event.target.value)"
    >
    <button (click)="createToDo()"> Create Task </button>
    <ul>
      <li *ngFor="let item of taskList; let i = index">
        <my-task (completed)="completeTask($event)" [task]="item"></my-task>
      </li>
    </ul>
  `
})
export class MyToDoComponent {
  task: string;
  taskList = [];

  constructor (public todoservice: ToDoService ) {
    this.taskList = todoservice.getCurrentTasks();
  }

  inputDetector ( value: string ) {
    this.task = value;
  }

  createToDo ( task: string ) {
    this.todoservice.createToDo(this.task)
  }

  completeTask (task: string) {
    this.taskList = this.todoservice.completeTask(task);

  }
}
