import { Schema } from 'mongoose'

export interface requestBodyDto {
  user: {
    username: string
    sub: string
    email: string
    _id: Schema.Types.ObjectId
  }
}
