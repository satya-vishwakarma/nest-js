import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
export type UsersDocument = Users & Document
@Schema()
export class Users {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId

  @Prop({ required: true, unique: true })
  email: string

  @Prop({ required: true, unique: true })
  username: string

  @Prop({ required: true })
  password: string

  @Prop({ required: true, default: '1' })
  role: string

  @Prop({ required: true, default: true })
  isActive: boolean

  @Prop({ required: true, default: Date.now })
  createdAt: Date

  @Prop({ required: true, default: Date.now })
  updatedAt: Date

  @Prop({ required: true, default: false })
  isDelete: boolean
}

export const usersSchema = SchemaFactory.createForClass(Users)
