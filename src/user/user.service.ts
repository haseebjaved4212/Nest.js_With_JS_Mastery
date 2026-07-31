import { Injectable } from '@nestjs/common';

interface User {
  id: number;
  name: string;
  email: string;
}
@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.mclean@examplepetstore.com' },
    { id: 2, name: 'Haseeb', email: 'haseeb@examplepetstore.com' },
  ];

  findAllUsers(name: string = '') {
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase()),
    );
  }
}
