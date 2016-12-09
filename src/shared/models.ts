export class User {
    _id: string;
    name: string;
    age: number;
    phone: string;
    picture: string;
    email: string;
    address: string;
    greeting: string;
    gender: string;
    company: string;
    isActive: boolean;

    static defaultUser = {
        _id: '',
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

    constructor(user = User.defaultUser) {
        Object.assign(this, user);
    }
}

