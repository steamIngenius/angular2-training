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
    this.subscribeToUserData();
  }

  subscribeToUserData() {
    this.userService.getUserChanges()
      .subscribe(data => {
        console.log(data)
        this.users = data.userData;
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

  editUser () {
    console.log('Implement u a edit feature.');
  }
  deleteUser() {
    // whatever
  }
}
