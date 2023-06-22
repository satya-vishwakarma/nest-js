import { IsNotEmpty, IsString } from 'class-validator'

export class createRoleDto {
  @IsString()
  @IsNotEmpty()
  roleName: string

  @IsString()
  role_desc: string
}
