import { InMemoryDbService } from 'angular2-in-memory-web-api';

import { data } from './data-json';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {data};
  }
}