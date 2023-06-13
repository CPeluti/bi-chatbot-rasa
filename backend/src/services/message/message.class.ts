import type { Application, Id, NullableId, Params } from '@feathersjs/feathers'
export interface MessageServiceOptions {
  app: Application
}
export class MessageService {
  constructor(public options: MessageServiceOptions) {}
  messages: string[] = []
  async find(params: Params) {
  	return this.messages
  }
  async get(id: Id, params: Params) {}
  async create(data: any, params: Params) {
    this.messages.push(data.text)
    return "msg cadastrada"
  }
  async update(id: NullableId, data: any, params: Params) {}
  async patch(id: NullableId, data: any, params: Params) {}
  async remove(id: NullableId, params: Params) {}
}
export const getOptions = (app: Application) => {
  return { app }
}