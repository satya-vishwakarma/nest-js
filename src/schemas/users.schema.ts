import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
export type UsersDocument = Users & Document
@Schema()
export class Users {
  @Prop({ required: true })
  property_1: string

  @Prop({ required: true })
  property_2: number

  @Prop()
  property_3: string

  @Prop({ required: true })
  property_4: boolean
}

export const usersSchema = SchemaFactory.createForClass(Users)
