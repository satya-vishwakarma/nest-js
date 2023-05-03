import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { BaseModel } from 'src/comman/model/baseModel.model'
import { Users } from 'src/schemas'

export class UserModel extends BaseModel {
  constructor(
    @InjectModel(Users.name)
    private userModel: Model<Users>,
  ) {
    super(userModel)
  }
}
