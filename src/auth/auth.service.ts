import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private jwtService: JwtService,
	) { }

	async signIn(username, pass) {
		const user = await this.usersService.findOne({ username })

		const comparePassRes = await this.usersService.comparePassword({
			requestPassword: pass,
			hashPassword: user?.password,
		})

		if (!comparePassRes) {
			throw new UnauthorizedException()
		}
		const payload = {
			username: user.username,
			email: user.email,
			_id: user._id,
		}
		return {
			access_token: `Bearer ${await this.jwtService.signAsync(payload)}`,
		}
	}
}
