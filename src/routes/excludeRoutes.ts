import { MiddlewareConsumer, RequestMethod } from '@nestjs/common'
import { AuthMiddleware } from '../middleware/auth.middleware'
export const excludeRoutes = (consumer: MiddlewareConsumer) => {
  consumer
    .apply(AuthMiddleware)
    .exclude({ path: '/auth/login', method: RequestMethod.POST })
    .forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    })
}
