import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Users } from 'src/schemas/users.schema'
import { UserModel } from './users.model'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(private userModel: UserModel) {}

  getUserInfo() {
    return this.userModel.getUserInfo()
  }

  async registerUser({ username, password, email }: Users): Promise<any> {
    const hash = await bcrypt.hash(password, await bcrypt.genSalt())
    const prepareUserObj = {
      username,
      password: hash,
      email,
    }
    return this.userModel.saveUser(prepareUserObj)
  }
}
