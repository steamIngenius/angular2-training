import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'companyselector',

  template: `
    <br>
    <div>
      <button *ngFor="let item of companies" (click)="selectCompany(item)">
        {{ item }}
      </button>
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
