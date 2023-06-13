// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#custom-services
import type { Id, NullableId, Params, ServiceInterface } from '@feathersjs/feathers'

import type { Application } from '../../declarations'

type Teste = any
type TesteData = any
type TestePatch = any
type TesteQuery = any

export type { Teste, TesteData, TestePatch, TesteQuery }

export interface TesteServiceOptions {
  app: Application
}

export interface TesteParams extends Params<TesteQuery> {}

// This is a skeleton for a custom service class. Remove or add the methods you need here
export class TesteService<ServiceParams extends TesteParams = TesteParams>
  implements ServiceInterface<Teste, TesteData, ServiceParams, TestePatch>
{
  constructor(public options: TesteServiceOptions) {}

  async find(_params?: ServiceParams): Promise<Teste[]> {
    return []
  }

  async get(id: Id, _params?: ServiceParams): Promise<Teste> {
    return {
      id: 0,
      text: `A new message with ID: ${id}!`
    }
  }

  async create(data: TesteData, params?: ServiceParams): Promise<Teste>
  async create(data: TesteData[], params?: ServiceParams): Promise<Teste[]>
  async create(data: TesteData | TesteData[], params?: ServiceParams): Promise<Teste | Teste[]> {
    if (Array.isArray(data)) {
      return Promise.all(data.map((current) => this.create(current, params)))
    }

    return {
      id: 0,
      ...data
    }
  }

  // This method has to be added to the 'methods' option to make it available to clients
  async update(id: NullableId, data: TesteData, _params?: ServiceParams): Promise<Teste> {
    return {
      id: 0,
      ...data
    }
  }

  async patch(id: NullableId, data: TestePatch, _params?: ServiceParams): Promise<Teste> {
    return {
      id: 0,
      text: `Fallback for ${id}`,
      ...data
    }
  }

  async remove(id: NullableId, _params?: ServiceParams): Promise<Teste> {
    return {
      id: 0,
      text: 'removed'
    }
  }
}

export const getOptions = (app: Application) => {
  return { app }
}
