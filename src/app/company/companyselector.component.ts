import { Component } from '@angular/core';

import { UserService } from '../user/user.service';
import { User, UserList } from '../../shared/models';

@Component({
  selector: 'companyselector',
  template: `
    <div>
      <button *ngFor="let item of companies" (click)="selectCompany(item)">
        {{ item }}
      </button>
    </div>
  `
})
export class CompanySelectorComponent { 
  private companies = [];
  constructor(private userService: UserService) {
    this.subscribeToCompanyData();
  }

  selectCompany(item) {
    console.log('Fix company selection');
  }

  subscribeToCompanyData() {
    this.userService.getUserChanges()
      .subscribe(data => {
        console.log(data)
        const { users } = data.userData;
        this.companies = users.reduce((prev, curr) => {
          if (prev.indexOf(curr.company) === -1) {
            prev.push(curr.company);
          }
          return prev;
        }, []);
      });
  }
}
