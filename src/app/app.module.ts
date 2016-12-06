import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccountMgrComponent } from '../accountmgr/accountmgr.component'
import { AccountMgrService } from '../accountmgr/accountmgr.service';
import { CompanySelectorComponent } from '../accountmgr/companyselector.component'
import { UserSelectorComponent } from '../accountmgr/userselector.component'
import { UserComponent } from '../accountmgr/user.component'
import { AppComponent } from './app.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AccountMgrComponent,
    CompanySelectorComponent,
    UserSelectorComponent,
    UserComponent,
    AppComponent
  ],
  providers: [
    AccountMgrService
  ]

})

export class AppModule {}
