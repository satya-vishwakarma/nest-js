import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseFilters,
} from '@nestjs/common'
import { UsersService } from './users.service'

import { MongoExceptionFilter } from '../comman/filters/mongo-exception.filter'
import { UserDto } from './dto/users.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUserList() {
    return this.usersService.getUserList()
  }

  @UseFilters(MongoExceptionFilter)
  @Post('register')
  registerUser(@Body() body: UserDto) {
    return this.usersService.registerUser(body)
  }

  @Get('profile')
  getUserInfo(@Request() req: any) {
    return req.user
  }
}
