import { Component } from '@angular/core';
import { AccountMgrService } from './accountmgr.service';

@Component({
  selector: 'accountmgr',
  template:  `
    <companyselector [companies]="currentCompanies()" (selectedCompany)="selectedCompany($event)">

    </companyselector>
    <br>
    <userselector [companyUsers]="companyUsers" (selectedUser)="selectedUser($event)">
    </userselector>
    <br>
    <user [user]="currentUser">
    </user>

  `
})
export class AccountMgrComponent {
  users = [];
  companyUsers = [];
  currentUser: string;

  constructor (public accountmgrservice: AccountMgrService ) {
    this.users = accountmgrservice.getUsers();
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
    console.log(this.companyUsers);

  }

  selectedUser(user) {
    console.log(user);
    this.currentUser = user;
  }

}
