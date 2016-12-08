import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'


var modules = [
    CommonModule,
    ReactiveFormsModule
];

@NgModule({
    imports: [ ...modules ],
    declarations: [],
    exports: [ ...modules ]
})
export class SharedModule {
// code from instructors' example - we don't
// have a provider in here yet

//   static withProviders (): ModuleWithProviders {
//     return {
//       ngModule: SharedModule,
//       providers
//     }
//   }

// also this:
// https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#q-why-bad
// and:
// https://angular.io/docs/ts/latest/api/core/index/ModuleWithProviders-interface.html
}
