import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User, UserList } from './models';

export interface AppState {
    users: UserList
};
const _defaultState: AppState = {
    users: new UserList([User.defaultUser])
};
let _state = new BehaviorSubject(_defaultState);

@Injectable()
export class StoreService {
    changes = _state.asObservable();

    getState() {
        return _state.value;
    }
    setState(newState: AppState) {
        _state.next(newState);
    }

    get(property: string) {
        return _state.value[property];
    }
    update(property: string, value: any) {
        const newState: AppState = Object.assign({}, _state.value, { [property] : value });
        _state.next(newState);
    }
}