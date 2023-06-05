import { Module } from '@nestjs/common'
import { RoleManagementController } from './role-management.controller'
import { RoleManagementService } from './role-management.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Roles, rolesSchema } from '../../schemas'
import { RoleMangmentModel } from './role-management.model'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Roles.name, schema: rolesSchema }]),
  ],
  controllers: [RoleManagementController],
  providers: [RoleManagementService, RoleMangmentModel],
})
export class RoleManagementModule {}
