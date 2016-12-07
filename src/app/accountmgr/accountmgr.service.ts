import { Injectable } from '@angular/core';

import { data } from '../../data-json';
import { User } from '../../shared/models';
import { StoreService } from '../../shared/store.service';

@Injectable()
export class AccountMgrService {
  constructor(public store: StoreService) {
    const userData = data.map(user => {
      return new User(user);
    });
    this.store.update('users', userData);
  }

  getUsers() {
    return this.store.get('users');
  }

  createUser(user: User) { }
  // and so on
}
