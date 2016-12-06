import { Component } from '@angular/core';
import { AccountMgrService } from './accountmgr.service';
import { CompanySelectorComponent } from './companyselector.component';

@Component({
  selector: 'accountmgr',
  template:  `
    <companyselector [companies]="currentCompanies()" (selectedCompany)="selectedCompany($event)">

    </companyselector>
    <br>
    <userselector [companyUsers]="companyUsers">
    </userselector>

  `
})
export class AccountMgrComponent {
  users = [];
  companyUsers = [];
  currentCompany = [];
  selectedUser= [];

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

}
