import { Input, Output, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-task',
  template: `
    {{ task }}
    <button (click)="completeTask()"> Complete </button>
  `
})
export class MyTask {
  @Input() task: any
  @Output() completed = new EventEmitter();

  completeTask () {
    this.completed.emit(this.task);
  }
}
