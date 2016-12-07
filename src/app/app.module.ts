import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AccountMgrModule } from './accountmgr/accountmgr.module'
import { UserModule } from './user/user.module'
import { CompanyModule } from './company/company.module';

import { AppComponent } from './app.component';

import { AccountMgrService } from './accountmgr/accountmgr.service';
import { StoreService } from '../shared/store.service';

@NgModule({
  imports: [
    SharedModule,
    AccountMgrModule,
    UserModule,
    CompanyModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AccountMgrService,
    StoreService
  ]
})

export class AppModule {}
