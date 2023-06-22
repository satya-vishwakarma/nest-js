import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Request,
} from '@nestjs/common'
import { RoleManagementService } from './role-management.service'
import { requestBodyDto } from '../../comman/dto/index.dto'
import { createRoleDto } from './dto/create-role.dto'

@Controller('role-management')
export class RoleManagementController {
  constructor(private readonly roleService: RoleManagementService) {}
  @Post()
  createRole(@Request() req: requestBodyDto, @Body() body: createRoleDto) {
    try {
      return this.roleService.createRole(body, req)
    } catch (error) {
      throw new BadRequestException(error)
    }
  }
}
