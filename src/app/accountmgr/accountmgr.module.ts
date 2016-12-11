import { NgModule } from '@angular/core';

import { AccountMgrComponent } from './accountmgr.component'
import { AccountMgrService } from './accountmgr.service';
import { CompanyModule } from '../company/company.module'
import { UserModule } from '../user/user.module'

const components = [
  AccountMgrComponent
];


@NgModule({
  imports: [
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
    ...components
  ]
})

export class AccountMgrModule {}
