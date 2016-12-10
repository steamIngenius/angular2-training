import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AccountMgrModule } from './accountmgr/accountmgr.module'
import { UserModule } from './user/user.module'
import { CompanyModule } from './company/company.module';

import { AppComponent } from './app.component';

import { AccountMgrService } from './accountmgr/accountmgr.service';
import { StoreService } from '../shared/store.service';

const modules = [
  AccountMgrModule,
  UserModule,
  CompanyModule
];


@NgModule({
  imports: [
    ...modules,
    SharedModule.withProviders()
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AccountMgrService,
    StoreService
  ],
  exports: [
    ...modules
  ]
})
export class AppModule { }
