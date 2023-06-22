import { Injectable } from '@nestjs/common'
import { RoleMangmentModel } from './role-management.model'
import { requestBodyDto } from '../../comman/dto/common.dto'

@Injectable()
export class RoleManagementService {
  constructor(private readonly roleModel: RoleMangmentModel) {}
  createRole(body, req: requestBodyDto) {
    const { user } = req

    const prePareRoleData = {
      ...body,
      createdBy: user._id,
      updatedBy: user._id,
    }

    return this.roleModel.save(prePareRoleData)
  }
}
