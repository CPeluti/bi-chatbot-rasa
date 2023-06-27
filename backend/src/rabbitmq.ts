// For more information about this file see https://dove.feathersjs.com/guides/cli/databases.html
import client, {Channel, Connection} from 'amqplib'
import type { Application } from './declarations'

export const rabbitmq = async (app: Application) => {
  const settings = app.get('rabbitmq')
  const connection: Connection = await client.connect(`amqp://${settings.user}:${settings.password}@${settings.addr}`) 
  const channel: Channel = await connection.createChannel()
  await channel.assertQueue(settings.queue)
  app.set('rabbitmqClient', channel)
}
