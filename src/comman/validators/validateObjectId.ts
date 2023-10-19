import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'
import { Types } from 'mongoose'

@ValidatorConstraint({ name: 'customText', async: false })
export class IsObjectId implements ValidatorConstraintInterface {
  validate(id: string) {
    const ObjectId = Types.ObjectId

    return ObjectId.isValid(id) && String(new ObjectId(id)) === id
  }

  defaultMessage() {
    return 'The value should be an ObjectId'
  }
}
