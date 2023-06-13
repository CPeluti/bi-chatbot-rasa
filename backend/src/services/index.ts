import { teste } from './teste/teste'
import { message } from './message/message'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(teste)
  app.configure(message)
  // All services will be registered here
}
