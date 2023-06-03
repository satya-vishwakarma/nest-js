export interface BaseModelInterface {
  find: (id) => Promise<any>
  findById: (id) => Promise<any>
  save: (id) => Promise<any>
  findOne: (id) => Promise<any>
}
