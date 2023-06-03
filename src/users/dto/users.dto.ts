import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator'

import { ERRORMESSAGE } from './../../comman/constants/'

const { PASSOWRDVALIDATION } = ERRORMESSAGE

export class UserDto {
  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  @IsEmail()
  email: string

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
