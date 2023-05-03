import { BaseModelInterface } from '../interfaces/baseModel.interface'

export class BaseModel implements BaseModelInterface {
  private readonly currentModel: any
  constructor(modelRef) {
    this.currentModel = modelRef
  }
  find(where) {
    return this.currentModel.find(where)
  }

  findById(id) {
    return this.currentModel.findById(id)
  }

  save(data) {
    const response = new this.currentModel(data)
    return response.save()
  }
}
