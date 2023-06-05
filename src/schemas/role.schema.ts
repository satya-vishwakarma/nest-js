import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
export type RolesDocument = Roles & Document
@Schema({ collection: 'roles' })
export class Roles {
  @Prop({ required: true, unique: true })
  roleName: string

  @Prop({ required: true, unique: true })
  role_desc: string

  @Prop({ required: true, default: true })
  status: boolean

  @Prop({ required: true, default: Date.now })
  createdAt: Date

  @Prop({ required: true, default: Date.now })
  updatedAt: Date

  @Prop({ required: true, default: false })
  isDelete: boolean
}

export const rolesSchema = SchemaFactory.createForClass(Roles)
