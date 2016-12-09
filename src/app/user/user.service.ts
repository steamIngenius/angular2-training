import { Injectable } from '@angular/core';

import { StoreService } from '../../shared/store.service';
import { User, UserList } from '../../shared/models';


@Injectable()
export class UserService {
  userList: UserList;
  constructor( storeService: StoreService ) { }

  getChages () {
      return
  }
}