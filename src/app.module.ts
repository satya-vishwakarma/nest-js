import { MiddlewareConsumer, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { PermissionModule } from './permissions/permission/permission.module'
import { RoleManagementModule } from './permissions/role-management/role-management.module'
import { excludeRoutes } from './routes/excludeRoutes'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UsersModule,
    AuthModule,
    RoleManagementModule,
    PermissionModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    excludeRoutes(consumer)
  }
}
