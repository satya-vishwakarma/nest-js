import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username, pass) {
    const user = await this.usersService.findOne({ username })

    const comparePassRes = await this.usersService.comparePassword(
      pass,
      user?.password,
    )

    if (!comparePassRes) {
      throw new UnauthorizedException()
    }
    const payload = { username: user.username, sub: user.userId }
    return {
      access_token: `Bearer ${await this.jwtService.signAsync(payload)}`,
    }
  }
}
