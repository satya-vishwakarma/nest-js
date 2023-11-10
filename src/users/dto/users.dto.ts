import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator'

import { ApiProperty } from '@nestjs/swagger'
import { Types } from 'mongoose'
import { ERRORMESSAGE } from './../../comman/constants/'

const { PASSOWRDVALIDATION } = ERRORMESSAGE

export class UserDto {
  @ApiProperty({ description: 'Object Id' })
  @IsOptional()
  _id: Types.ObjectId

  @ApiProperty({ description: 'user name' })
  @IsNotEmpty()
  username: string

  @ApiProperty({ description: 'Email' })
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty({
    description:
      'password should be minimum 8 characters at least one letter and one number',
    minimum: 1,
    maximum: 20,
  })
  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  @MaxLength(20)
  @Matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
    message: PASSOWRDVALIDATION,
  })
  password: string

  @IsOptional()
  isActive: boolean

  @IsOptional()
  createdAt: Date

  @IsOptional()
  updatedAt: Date

  @IsOptional()
  isDelete: boolean

  @IsOptional()
  role: string
}
