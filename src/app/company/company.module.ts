import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { CompanyService } from './company.service';
import { CompanySelectorComponent } from './companyselector.component';


@NgModule({
  imports: [ SharedModule ],
  declarations: [
    CompanySelectorComponent
  ],
  exports: [
    CompanySelectorComponent
  ],
  providers: [
    CompanyService
  ]
})
export class CompanyModule { }
