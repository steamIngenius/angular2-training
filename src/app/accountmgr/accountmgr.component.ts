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

  constructor (public accountmgrservice: AccountMgrService ) {
    this.getUsers();
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
    console.log(company, ' selected.');
    this.companyUsers = this.users.filter(user => user.company === company);
  }

  selectedUser(user) {
    console.log(user);
    this.currentUser = user;
  }

  saveUser(user) {
    console.log(user, ' saved')
  }

  newUser() {
    console.log('fill out AccountMgrComponent.newUser()');
  }

  getUsers() {
    this.users = this.accountmgrservice.getUsers();
  }
}
