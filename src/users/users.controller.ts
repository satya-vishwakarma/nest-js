import {
  Body,
  Controller,
  Get,
  Post,
  Request,
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
  getUserList() {
    return this.usersService.getUserList()
  }

  @UseFilters(MongoExceptionFilter)
  @Post('register')
  registerUser(@Body() body: UserDto) {
    return this.usersService.registerUser(body)
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getUserInfo(@Request() req: any) {
    return req.user
  }
}
