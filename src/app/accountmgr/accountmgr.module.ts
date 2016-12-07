import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccountMgrComponent } from './accountmgr.component'
import { AccountMgrService } from './accountmgr.service';
import { CompanyModule } from '../company/company.module'
import { UserModule } from '../user/user.module'



@NgModule({
  imports: [
    CommonModule,
    UserModule,
    CompanyModule
  ],
  declarations: [
    AccountMgrComponent
  ],
  providers: [
    AccountMgrService
  ],
  exports: [
    AccountMgrComponent
  ]
})

export class AccountMgrModule {}
