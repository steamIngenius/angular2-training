import { Injectable } from '@angular/core';

import { StoreService } from '../../shared/store.service';


@Injectable()
export class CompanyService {
  constructor(private store: StoreService) {
    // subscribe to user data
  }

  getCompanies() {}

  getCompanyChanges() {}
}