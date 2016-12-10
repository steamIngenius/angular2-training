export class User {
  id: string;
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
    id: '',
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

export class UserList {
  users: User[];
  defaultUsers: User[];
  constructor(users?: User[]) {
    this.defaultUsers = [
      new User()
    ];
    this.users = users || this.defaultUsers;
  }
}

export class CompanyList {
  constructor(public companies: String[]) {}
}