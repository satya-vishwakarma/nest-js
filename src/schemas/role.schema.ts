import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import { Users } from './users.schema'

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

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: () => Users,
    default: null,
  })
  updatedBy: MongooseSchema.Types.ObjectId

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: () => Users,
    default: null,
  })
  createdBy: MongooseSchema.Types.ObjectId

  @Prop({ required: true, default: false })
  isDelete: boolean
}

export const rolesSchema = SchemaFactory.createForClass(Roles)
