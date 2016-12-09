import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User, UserList } from '../../shared/models';

@Component({
  selector: 'user-data',
  templateUrl: 'user.component.html'
})
export class UserComponent {
  @Input() users: UserList;
  @Output() saved = new EventEmitter();
  userModified: boolean;
  constructor() {
    this.userModified = false;
  }

  // modifyUser(property, value) {
  //   this.userModified = true;
  //   console.log('modifyUser: ' + property + ', ' + value);
  //   this.user = Object.assign({}, this.user, { [property] : value });
  // }

  save() {
    this.userModified = false;
    this.saved.emit(this.users);
  }

  cancel() {
    this.userModified = false;
  }

  deleteUser() {
    //whatever
  }
}
