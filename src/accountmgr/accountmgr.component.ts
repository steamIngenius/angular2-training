import { Component } from '@angular/core';
import { AccountMgrService } from './accountmgr.service';

@Component({
  selector: 'accountmgr',
  template:  `
    <companyselector 
      [companies]="currentCompanies()" 
      (selectedCompany)="selectedCompany($event)">
    </companyselector>
    <userselector 
      [companyUsers]="companyUsers" 
      (selectedUser)="selectedUser($event)">
    </userselector>
    <br>
    <user-data 
      *ngIf="currentUser !== defaultUser" 
      (saved)="saveUser($event)"
      [user]="currentUser">
    </user-data>
  `
})
export class AccountMgrComponent {
  users = [];
  companyUsers = [];
  currentUser: Object;
  defaultUser = {
    name: '',
    age: '',
    phone: ''
  };

  constructor (public accountmgrservice: AccountMgrService ) {
    this.users = accountmgrservice.getUsers();
    this.currentUser = this.defaultUser;
  }

  currentCompanies() {
    return this.users.reduce((prev, cur) => {
      prev.push(cur.company);
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
    console.log(user.name, ' saved')
  }
}
