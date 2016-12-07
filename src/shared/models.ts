export class User {
    name: string;
    age: number;
    phone: string;
    picture: string;
    email: string;
    address: string;
    greeting: string;
    gender: string;
    company: string;
    isActive: boolean

    constructor(user: User = defaultUser) {
        Object.assign(this, user);
    }
}

const defaultUser = {
    name: '',
    age: 0,
    phone: '',
    picture: '',
    email: '',
    address: '',
    greeting: '',
    gender: '',
    company: '',
    isActive: true
}