import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';



@Component({
  selector: 'user-form',
  template: `
      <form (ngSubmit)="newUser()" [formGroup]="form">
        <input type="text" formControlName="username" placeholder="User Name">
        <select formControlName="usercompany">
          <option>Extensis</option>
          <option>Lizardtech</option>
        </select>
        <input type="number" formControlName="userage" placeholder="Age">
        <input type="text" formControlName="userphone" placeholder="Phone">
        <input type="text" formControlName="useremail" placeholder="email">
        <input type="text" formControlName="useraddress" placeholder="Address">
        <input type="text" formControlName="usergreeting" placeholder="Greeting">
        <input type="text" formControlName="usergender" placeholder="Gender">
        <input type="text" formControlName="useractive" placeholder="Active">
      </form>
  `
})

export class UserFormComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      usercompany: new FormControl('', Validators.required),
      userphone: new FormControl('', Validators.required),
      useremail: new FormControl('', Validators.required),
      useraddress: new FormControl('', Validators.required),
      usergreeting: new FormControl('', Validators.required),
      usergender: new FormControl('', Validators.required),
      useractive: new FormControl('', Validators.required)
    })
  }

  newUser() {
    // do something
  }

}
