import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module'

import { UserDataComponent } from './user-data.component';
import { UserFormComponent } from './user-form.component';

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
  ]
})
export class UserModule { }
