import './polyfills.browser';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';

// mock web api that accepts requests and returns our user data
// I put this here because it's not really part of the app, but
// rather part of the underlying infastructure
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app/app.component'
import { AppModule } from './app/app.module'

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
    AppModule
  ]
})
class MainModule {}

var platform = platformBrowserDynamic();
platform.bootstrapModule(MainModule);
