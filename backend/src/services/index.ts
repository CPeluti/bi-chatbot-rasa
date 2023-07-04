import { messages } from './messages/messages'
import { teste } from './teste/teste'
import { consumer } from './consumer/consumer'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(messages)
  app.configure(teste)
  app.configure(consumer)
  // All services will be registered here
}
