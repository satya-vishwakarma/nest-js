import { BaseModelInterface } from '../interfaces/baseModel.interface'

export abstract class BaseModel implements BaseModelInterface {
  private readonly currentModel: any
  constructor(modelRef) {
    this.currentModel = modelRef
  }
  find(where, projection = {}) {
    return this.currentModel.find(where, projection)
  }

  findById(id) {
    return this.currentModel.findById(id)
  }

  save(data) {
    const response = new this.currentModel(data)
    return response.save()
  }

  findOne(condition) {
    return this.currentModel.findOne(condition)
  }
}
