import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserSelectorComponent } from './userselector.component'
import { UserComponent } from './user.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserSelectorComponent,
    UserComponent
  ],
  exports: [
    UserSelectorComponent,
    UserComponent
  ]
})

export class UserModule {}
