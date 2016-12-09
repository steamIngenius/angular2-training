import { Injectable } from '@angular/core';

import { data } from '../../data-json';
import { User, UserList } from '../../shared/models';
import { StoreService } from '../../shared/store.service';

@Injectable()
export class AccountMgrService {
  constructor(public store: StoreService) {
    const userData: UserList = new UserList(data.map(user => {
      const {
        _id, name, age, phone, picture, email,
        address, greeting, gender, company, isActive
      } = user;
      return new User({
        _id, name, age, phone, picture, email,
        address, greeting, gender, company, isActive
      });
    }));

    this.store.update('users', userData);
  }

  getUsers(): UserList {
    return this.store.get('users');
  }

  createUser(user: User) { }
  // and so on
}
