import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator'
import { Types } from 'mongoose'

@ValidatorConstraint({ name: 'customText', async: false })
export class IsObjectId implements ValidatorConstraintInterface {
  validate(id: string, args: ValidationArguments) {
    const ObjectId = Types.ObjectId

    return ObjectId.isValid(id) && String(new ObjectId(id)) === id
  }

  defaultMessage(args: ValidationArguments) {
    return 'The value should be an ObjectId'
  }
}
