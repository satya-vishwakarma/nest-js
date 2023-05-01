import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common'
import { MongoError } from 'mongodb'
import { Response } from 'express'

import { ERRORMESSAGE } from '../constants'

const { ALREADY_REGISTERED } = ERRORMESSAGE

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    switch (exception.code) {
      case 11000:
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        response.statusCode = HttpStatus.FORBIDDEN
        response.json({
          statusCode: HttpStatus.FORBIDDEN,
          timestamp: new Date().toISOString(),
          message: ALREADY_REGISTERED,
        })
    }
  }
}
