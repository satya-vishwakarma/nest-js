import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common'
import { UsersService } from './users.service'

import { AuthGuard } from '../auth/auth.guard'
import { MongoExceptionFilter } from '../comman/filters/mongo-exception.filter'
import { UserDto } from './dto/users.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get()
  getUserInfo() {
    return this.usersService.getUserInfo()
  }

  @UseFilters(MongoExceptionFilter)
  @Post('register')
  registerUser(@Body() body: UserDto) {
    return this.usersService.registerUser(body)
  }
}
