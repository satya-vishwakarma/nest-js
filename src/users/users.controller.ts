import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common'
import { UsersService } from './users.service'
import { UserDto } from './dto/users.dto'
import { MongoExceptionFilter } from 'src/comman/filters/mongo-exception.filter'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

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
