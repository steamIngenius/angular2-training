import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'companyselector',
  template: `
  SELECT COMPANY:
  <div style="padding:10px;">
    <span *ngFor="let item of companies" (click)="selectCompany(item)">
      {{ item }}
    </span>
  </div>
  <br>

  `



})


export class CompanySelectorComponent {
  @Input() companies: string[] = [];
  @Output() selectedCompany = new EventEmitter();

  selectCompany(company) {
    this.selectedCompany.emit(company)
  }

}
