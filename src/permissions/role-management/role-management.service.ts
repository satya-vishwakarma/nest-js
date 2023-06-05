import { Injectable } from '@nestjs/common'
import { RoleMangmentModel } from './role-management.model'

@Injectable()
export class RoleManagementService {
  constructor(private readonly roleModel: RoleMangmentModel) {}
  createRole(body) {
    return this.roleModel.save(body)
  }
}
