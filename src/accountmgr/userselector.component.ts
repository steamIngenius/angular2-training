import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'userselector',
  template: `
    <div *ngFor="let item of companyUsers" (click)="selectUser(item)">
      {{ item.name }}
    </div>

  `
})
export class UserSelectorComponent {
  @Input() companyUsers: string[] = [];
  @Output() selectedUser = new EventEmitter();

  selectUser(user) {
    this.selectedUser.emit(user);
  }

  newUser() {
    //
  }


}
