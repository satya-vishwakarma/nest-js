import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Users } from 'src/schemas/users.schema'
import { UserModel } from './users.model'

@Injectable()
export class UsersService {
  constructor(private userModel: UserModel) {}

  getUserInfo() {
    return this.userModel.getUserInfo()
  }
}
