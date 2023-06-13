// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import type { Application } from '../../declarations'
import { TesteService, getOptions } from './teste.class'

export const testePath = 'teste'
export const testeMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export * from './teste.class'

// A configure function that registers the service and its hooks via `app.configure`
export const teste = (app: Application) => {
  // Register our service on the Feathers application
  app.use(testePath, new TesteService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: testeMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(testePath).hooks({
    around: {
      all: []
    },
    before: {
      all: [],
      find: [],
      get: [],
      create: [],
      patch: [],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [testePath]: TesteService
  }
}
