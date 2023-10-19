import { Injectable, NestMiddleware } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { NextFunction, Request, Response } from 'express'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  async use(req: Request, resp: Response, next: NextFunction) {
    try {
      if (!req?.headers['authorization']) {
        resp.status(401).send({ code: 401, message: 'UnAutorized Access' })
        return
      }
      const token = this.extractTokenFromHeader(req)
      const decodedToken = this.validateToken(token)
      if (decodedToken && Object.keys(decodedToken).length > 0) {
        req['user'] = decodedToken
        next()
      } else {
        return resp
          .status(401)
          .send({ code: 401, message: 'UnAutorized Access' })
      }
    } catch (error) {
      resp.status(401).send({ code: 401, message: error.toString() })
    }
  }

  private validateToken(token) {
    const decodedJwt: any = this.jwtService.decode(token, { complete: true })

    if (!decodedJwt) {
      return Error('Something went wrong.')
    }
    return this.jwtService.verify(token)
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : undefined
  }
}
