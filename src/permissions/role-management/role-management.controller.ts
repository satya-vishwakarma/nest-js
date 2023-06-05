import { BadRequestException, Body, Controller, Post } from '@nestjs/common'
import { RoleManagementService } from './role-management.service'

@Controller('role-management')
export class RoleManagementController {
  constructor(private readonly roleService: RoleManagementService) {}
  @Post()
  createRole(@Body() body: any) {
    try {
      return this.roleService.createRole(body)
    } catch (error) {
      throw new BadRequestException(error)
    }
  }
}
