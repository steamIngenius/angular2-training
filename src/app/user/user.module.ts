import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';


import { UserComponent } from './user.component'
import { UserFormComponent} from './user-form.component'

const components = [
  UserComponent,
  UserFormComponent
]

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})

export class UserModule {}
