import { MiddlewareConsumer, RequestMethod } from '@nestjs/common'
import { AuthMiddleware } from '../middleware/auth.middleware'

const excluedRouteList = [
  { path: '/auth/login', method: RequestMethod.POST },
  { path: '/users/register', method: RequestMethod.POST },
]

export const excludeRoutes = (consumer: MiddlewareConsumer) => {
  consumer
    .apply(AuthMiddleware)
    .exclude(...excluedRouteList)
    .forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    })
}
