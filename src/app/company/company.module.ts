import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompanySelectorComponent } from './companyselector.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CompanySelectorComponent
  ],
  exports: [
    CompanySelectorComponent
  ]
})

export class CompanyModule{}
