import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Users, usersSchema } from 'src/schemas/users.schema'
import { UserModel } from './users.model'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: usersSchema }]),
  ],
  controllers: [UsersController],
  providers: [UserModel, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
