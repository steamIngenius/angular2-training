import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreService } from './store.service';

var modules = [
    CommonModule,
    ReactiveFormsModule
];

const providers = [
    StoreService
];

@NgModule({
    imports: [ ...modules ],
    declarations: [],
    exports: [ ...modules ]
})
export class SharedModule {
  static withProviders (): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers
    }
  }
}
