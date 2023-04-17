import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CONSTS } from '../../comman/const';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUserInfo() {
    return {
      name: 'sam',
      address: 'Noida',
      message: CONSTS,
    };
  }
}
