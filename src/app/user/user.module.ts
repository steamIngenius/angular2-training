import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';


import { UserComponent } from './user.component'
import { UserFormComponent} from './userform.component'

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    UserComponent,
    UserFormComponent
  ],
  exports: [
    UserComponent,
    UserFormComponent
  ]
})

export class UserModule {}
