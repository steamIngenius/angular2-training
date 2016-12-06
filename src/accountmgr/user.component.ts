import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'user-data',
  templateUrl: 'user.component.html'
})


export class UserComponent {
  @Input() user: Object;
  @Output() saved = new EventEmitter();
  userModified: boolean;
  constructor() {
    this.userModified = false;
  }

  modifyUser(property, value) {
    this.userModified = true;
    console.log('modifyUser: ' + property + ', ' + value);
    this.user[property] = value;
  }

  save() {
    this.userModified = false;
    this.saved.emit(this.user);
  }

  cancel() {
    this.userModified = false;
  }

  deleteUser() {
    //whatever
  }
}
