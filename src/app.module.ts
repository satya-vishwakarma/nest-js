import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './users/users.module'
import { MiddlewareConsumer, Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { RoleManagementModule } from './permissions/role-management/role-management.module'
import { PermissionModule } from './permissions/permission/permission.module'
import { excludeRoutes } from './routes/excludeRoutes'

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
