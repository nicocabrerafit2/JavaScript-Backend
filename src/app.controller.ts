import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/api/users')
  getUsers(): object {
    return this.appService.getUsers();
  }
  @Get('/api/users/qty')
  getUsersQty(): any {
    return this.appService.getUsersQty();
  }
  @Get('/api/users/:id')
  getUsersById(@Param('id') ParamsId): any {
    return this.appService.getUsersById(ParamsId);
  }
}
