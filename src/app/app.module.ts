import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccountMgrModule } from './accountmgr/accountmgr.module'
import { AccountMgrService } from './accountmgr/accountmgr.service';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module'
import { CompanyModule } from './company/company.module';


@NgModule({
  imports: [
    CommonModule,
    AccountMgrModule,
    UserModule,
    CompanyModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AccountMgrService
  ]

})

export class AppModule {}
