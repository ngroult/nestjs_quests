import { Body, Controller, Get, Post, Query, Param } from '@nestjs/common';
import { AppService } from './app.service';
// import { User } from './entities/user.model';
import { FilterService } from './filter/filter.service';
import { User } from './users/user.entity/user.entity';

@Controller('/hello')
export class AppController {
  constructor(private readonly filterService: FilterService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Post()
  getHello(@Body() body: User[], @Query('name') name: string): User[] {
    return [];
  }
}
