import { Component } from '@angular/core';

import { User, UserList } from '../../../shared/models';
import { UserService } from '../user.service';

@Component({
  selector: 'user-data',
  templateUrl: 'user-data.component.html'
})
export class UserDataComponent {
  users: UserList;
  userModified: boolean;
  constructor(private userService: UserService) {
    this.userModified = false;
    // this.users = new UserList();
    this.subscribeToUserData();
  }

  subscribeToUserData() {
    this.userService.getChanges()
      .subscribe(data => {
        console.log(data)
        this.users = data.userData;
        // debugger; // data = UserList
      });
  }

  imageUrl(url) {
    return url + '?ver=' + Math.random();
  }
  // modifyUser(property, value) {
  //   this.userModified = true;
  //   console.log('modifyUser: ' + property + ', ' + value);
  //   this.user = Object.assign({}, this.user, { [property] : value });
  // }

  save() {
    this.userModified = false;
  }

  cancel() {
    this.userModified = false;
  }

  deleteUser() {
    //whatever
  }
}
