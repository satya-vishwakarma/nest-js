import { HttpException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Users } from 'src/schemas'

export class UserModel {
  constructor(
    @InjectModel(Users.name)
    private userModel: Model<Users>,
  ) {}

  getUserInfo() {
    return this.userModel.find({})
  }

  async saveUser(userObj) {
    const userInc = new this.userModel(userObj)
    return await userInc.save()
  }
}
