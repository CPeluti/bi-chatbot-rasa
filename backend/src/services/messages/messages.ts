// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  messagesDataValidator,
  messagesPatchValidator,
  messagesQueryValidator,
  messagesResolver,
  messagesExternalResolver,
  messagesDataResolver,
  messagesPatchResolver,
  messagesQueryResolver
} from './messages.schema'

import type { Application } from '../../declarations'
import { MessagesService, getOptions } from './messages.class'
import { Message } from '../consumer/consumer.class'

export const messagesPath = 'messages'
export const messagesMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export * from './messages.class'
export * from './messages.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const messages = (app: Application) => {
  // Register our service on the Feathers application
  app.use(messagesPath, new MessagesService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: messagesMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(messagesPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(messagesExternalResolver),
        schemaHooks.resolveResult(messagesResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(messagesQueryValidator),
        schemaHooks.resolveQuery(messagesQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(messagesDataValidator),
        schemaHooks.resolveData(messagesDataResolver)
      ],
      patch: [
        schemaHooks.validateData(messagesPatchValidator),
        schemaHooks.resolveData(messagesPatchResolver)
      ],
      remove: []
    },
    after: {
      all: [],
      find: [(context)=>{
        const messages: Message[] = context.result
        const intents: Record<string,number> = {}
        const user_intents: Record<string,number> = {}
        const bot_intents: Record<string,number> = {}
        const addOrInsert = (obj: Record<string,number>, attr: string) =>{
          (attr in obj? obj[attr]++ : obj[attr]=1)
        }
        messages.forEach((message: Message)=>{
          addOrInsert(intents, message.intent)
          message.event == 'bot' ? addOrInsert(bot_intents, message.intent) : addOrInsert(user_intents, message.intent)
        })
        const res = {intents, bot_intents, user_intents}
        context.result = res;
        return context
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
    [messagesPath]: MessagesService
  }
}
