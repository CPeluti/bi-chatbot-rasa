// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { stringify } from 'querystring'
import type { Application } from '../../declarations'
import { ConsumerService, getOptions, Message } from './consumer.class'

export const consumerPath = 'consumer'
export const consumerMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export * from './consumer.class'
// A configure function that registers the service and its hooks via `app.configure`
export const consumer = (app: Application) => {
  // Register our service on the Feathers application
  app.use(consumerPath, new ConsumerService(getOptions(app), app), {
    // A list of all methods this service exposes externally
    methods: consumerMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(consumerPath).hooks({
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
      all: [],
      create: [(context)=>{
        if(context.result && Array.isArray(context.result)){
          // console.log(context.result)
          context.result.forEach((element: Message) => {
            context.app.service('messages').create(element)
          });
        }
      }]
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [consumerPath]: ConsumerService
  }
}
