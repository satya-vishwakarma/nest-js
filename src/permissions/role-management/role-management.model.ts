import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { BaseModel } from 'src/comman/model/baseModel.model'
import { Roles } from '../../schemas/'

export class RoleMangmentModel extends BaseModel {
  constructor(
    @InjectModel(Roles.name)
    private roleModel: Model<Roles>,
  ) {
    super(roleModel)
  }
}
