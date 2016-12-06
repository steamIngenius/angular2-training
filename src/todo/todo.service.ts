import { Injectable } from '@angular/core';
import { data } from '../data-json';

@Injectable()
export class ToDoService {
  taskList = [];

  getCurrentTasks () {
    return this.taskList;
  }

  createToDo ( task: string) {
    this.taskList.push(task);
  }

  completeTask (item: any) {
    var taskList = this.taskList.filter((value, i) => i !== item);
    this.taskList = taskList;

    return this.taskList;

  }
}
