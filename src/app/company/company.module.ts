import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { CompanySelectorComponent } from './companyselector.component'

@NgModule({
  imports: [ SharedModule ],
  declarations: [
    CompanySelectorComponent
  ],
  exports: [
    CompanySelectorComponent
  ]
})

export class CompanyModule{}
