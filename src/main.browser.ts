import './polyfills.browser';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { AccountMgrComponent } from './accountmgr/accountmgr.component'
import { AccountMgrService } from './accountmgr/accountmgr.service';
import { CompanySelectorComponent } from './accountmgr/companyselector.component'
import { UserSelectorComponent } from './accountmgr/userselector.component'

@Component({
  selector: 'app',
  template:  `
    <accountmgr></accountmgr>
  `
})
class AppComponent{}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    AccountMgrComponent,
    CompanySelectorComponent,
    UserSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AccountMgrService
  ]
})
class MainModule {}

var platform= platformBrowserDynamic();

platform.bootstrapModule(MainModule);
