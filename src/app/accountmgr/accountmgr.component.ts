import { Component } from '@angular/core';
import { AccountMgrService } from './accountmgr.service';

@Component({
  selector: 'accountmgr',
  templateUrl: './accountmgr.component.html'
})


export class AccountMgrComponent {
  users = [];
  companyUsers = [];
  currentUser: Object;
  makingUser : Boolean = false;
  defaultUser = {
    name: '',
    age: '',
    phone: '',
    picture: '',
    email: '',
    address: '',
    greeting: '',
    gender: '',
    company: '',
    isActive: true
  };

  constructor (public accountmgrservice: AccountMgrService ) {
    this.users = accountmgrservice.getUsers();
    this.currentUser = this.defaultUser;
  }

  currentCompanies() {
    return this.users.reduce((prev, cur) => {
      if (prev.indexOf(cur.company) === -1 ) {
        prev.push(cur.company);
    }
      return prev;
    }, [])
  }

  selectedCompany(company) {
    console.log(company);
    this.companyUsers = this.users.filter(user => user.company === company);
    this.currentUser = this.defaultUser;
  }

  selectedUser(user) {
    console.log(user);
    this.currentUser = user;
  }

  saveUser(user) {
    console.log(user, ' saved')
  }

  newUser() {
    this.makingUser = true;
    this.currentUser = this.defaultUser;
  }
}
