import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class loginDto {
  @ApiProperty({ description: 'User name', default: 'abc@yopmail.com' })
  @IsNotEmpty()
  username: string

  @ApiProperty({ description: 'Password', default: 'abc@123' })
  @IsString()
  password: string
}
