import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { Users } from 'src/schemas/users.schema'
import { UserModel } from './users.model'

@Injectable()
export class UsersService {
  constructor(private userModel: UserModel) {}

  getUserList() {
    return this.userModel.find(
      {},
      { _id: 1, email: 1, username: 1, createdAt: 1, updatedAt: 1 },
    )
  }

  async registerUser({ username, password, email }: Users): Promise<Users> {
    const hash = await bcrypt.hash(password, await bcrypt.genSalt())
    const prepareUserObj = {
      username,
      password: hash,
      email,
    }
    await this.userModel.save(prepareUserObj)
    return this.userModel.find(
      {
        email: email,
      },
      {
        password: 0,
        isActive: 0,
        isDelete: 0,
        __v: 0,
      },
    )
  }

  findOne(condition): Promise<Users> {
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
