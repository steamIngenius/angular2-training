import { NgModule, enableProdMode } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AccountMgrModule } from './accountmgr/accountmgr.module'
import { UserModule } from './user/user.module'
import { CompanyModule } from './company/company.module';

import { AppComponent } from './app.component';

import { AccountMgrService } from './accountmgr/accountmgr.service';
import { StoreService } from '../shared/store.service';
import { AccountMgrComponent } from './accountmgr/accountmgr.component';

// allows us to hackliy thwart caching for our placeholder images
enableProdMode();

const modules = [
  AccountMgrModule,
  UserModule,
  CompanyModule
];

const routes = [
  {
    path: 'accounts',
    component: AccountMgrComponent
  },
  {
    path: '',
    redirectTo: '/accounts',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    ...modules,
    SharedModule.withProviders(),
    RouterModule.forRoot(routes)
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
