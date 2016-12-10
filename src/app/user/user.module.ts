import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module'

import { UserService } from './user.service';
import { UserDataComponent } from './user-data/user-data.component';
import { UserFormComponent } from './user-form/user-form.component';

const components = [
  UserDataComponent,
  UserFormComponent
];


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  providers: [
    UserService
  ]
})
export class UserModule {
  constructor(private userService: UserService) {
    console.log('Creating User Module...');
    userService.sync()
  }
}
