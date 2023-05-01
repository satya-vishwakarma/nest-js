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
}
