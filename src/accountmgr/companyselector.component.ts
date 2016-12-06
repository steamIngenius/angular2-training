import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'companyselector',
  template: `
  <ul>
      <li *ngFor="let item of companies" (click)="selectCompany(item)">
        {{ item }}
      </li>
  </ul>

  `



})


export class CompanySelectorComponent {
  @Input() companies: string[] = [];
  @Output() selectedCompany = new EventEmitter();

  selectCompany(company) {
    this.selectedCompany.emit(company)
  }

}
