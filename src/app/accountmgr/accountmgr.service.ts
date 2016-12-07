import { Injectable } from '@angular/core';
import { data } from '../../data-json';

@Injectable()
export class AccountMgrService {
  userData = data;

  getUsers() {
    return this.userData;
  }

}
