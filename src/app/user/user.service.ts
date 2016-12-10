// This service will call out to our api to get
// users and populate the store with those users
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { StoreService } from '../../shared/store.service';
import { User, UserList } from '../../shared/models';


@Injectable()
export class UserService {
  constructor(
    private store: StoreService,
    private http: Http
  ) {
    console.log('Creating User Service...');
  }

  sync() {
    console.log('Getting stuff from the API...');
    this.http.get('/userData/users')
      .toPromise()
      .then(response => {
        const userData: UserList = new UserList(response.json().data.map(user => {
          const {
            _id, name, age, phone, picture, email,
            address, greeting, gender, company, isActive
          } = user;
          return new User({
            id: _id, name, age, phone, picture, email,
            address, greeting, gender, company, isActive
          });
        }));
        this.store.update('userData', userData);
      }).catch(err => console.log('Oh shiiiiit! : ', err));
  }

  getUsers() {
    return this.store.get('users');
  }

  getChanges() {
    return this.store.changes.filter(state => Boolean(state['userData']));
  }
}