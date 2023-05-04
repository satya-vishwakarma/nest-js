import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseGuards
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/users.dto';
import { MongoExceptionFilter } from 'src/comman/filters/mongo-exception.filter';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get()
  getUserInfo() {
    return this.usersService.getUserInfo();
  }

  @UseFilters(MongoExceptionFilter)
  @Post('register')
  registerUser(@Body() body: UserDto) {
    return this.usersService.registerUser(body);
  }
}
