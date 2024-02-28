import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class AppService {
  users = [
    { id: 1, name: 'nico', surna: 'cabrera', age: 30 },
    { id: 2, name: 'javier', surna: 'perez', age: 20 },
    { id: 3, name: 'marta', surna: 'infran', age: 60 },
    { id: 4, name: 'jenifer', surna: 'escudero', age: 50 },
    { id: 5, name: 'andres', surna: 'alaniz', age: 33 },
  ];
  getHello(): string {
    return 'Hola mundo!';
  }
  getProduct(): object {
    return { name: 'string', id: 2 };
  }
  getUsers(): object {
    return this.users;
  }
  getUsersQty(): any {
    return this.users.length;
  }
  getUsersById(@Param('id') ParamsId): any {
    const usersFinded = this.users.find((user) => user.id == ParamsId);
    return usersFinded;
  }
}
