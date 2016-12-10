import { InMemoryDbService } from 'angular-in-memory-web-api';

import { data } from './data-json';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = data;
    return {users};
  }
}