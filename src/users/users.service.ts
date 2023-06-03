import { Injectable } from '@nestjs/common'
import { Users } from 'src/schemas/users.schema'
import { UserModel } from './users.model'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(private userModel: UserModel) {}

  getUserList() {
    return this.userModel.find(
      {},
      { _id: 1, email: 1, username: 1, createdAt: 1, updatedAt: 1 },
    )
  }

  async registerUser({ username, password, email }: Users): Promise<any> {
    const hash = await bcrypt.hash(password, await bcrypt.genSalt())
    const prepareUserObj = {
      username,
      password: hash,
      email,
    }
    return this.userModel.save(prepareUserObj)
  }

  findOne(condition) {
    return this.userModel.findOne(condition)
  }

  comparePassword({ requestPassword, hashPassword }) {
    return new Promise((resolve) => {
      return bcrypt.compare(requestPassword, hashPassword, function (err, res) {
        if (err) {
          resolve(false)
        }
        resolve(res)
      })
    })
  }
}
