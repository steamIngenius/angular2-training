import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-data',
  template: `
  {{ JSON.stringify(user) }}

  `



})


export class UserComponent {
  @Input() user: Object;
  JSON: any;

  constructor() {
    this.JSON = JSON;
  }

}
