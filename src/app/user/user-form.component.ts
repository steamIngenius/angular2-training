import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';



@Component({
  selector: 'user-form',
  templateUrl: 'user-form.component.html'
})

export class UserFormComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      userage: new FormControl('', Validators.required),
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
