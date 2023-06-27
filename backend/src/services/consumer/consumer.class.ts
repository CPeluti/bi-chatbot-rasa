import type { Application, Id, NullableId, Params } from '@feathersjs/feathers'
import { Channel, ConsumeMessage } from 'amqplib';
export interface ConsumerServiceOptions {
  app: Application
}
export interface Message {
  text: string,
  intent: string,
  timestamp: number,
  event: string
}
export class ConsumerService {
  app: Application;
  constructor(public options: ConsumerServiceOptions, app: Application) {
    this.app = app
  }
  messages: Message[] = []
  async find(params: Params) {
    console.log(this.messages[0])
  	return this.messages
  }
  async get(id: Id, params: Params) {}
  async create(data: any, params: Params): Promise<Message[]>{
    const consumer = (channel: Channel) => (msg: ConsumeMessage | null): void => {
      if(msg){
        // console.log(msg)
        const m = JSON.parse(msg.content.toString())
        if(m.event == "user" || m.event == "bot"){
          if(m.event == 'user'){
            const data = {
              event: m.event,
              timestamp: m.timestamp,
              text: m.text,
              intent: m.parse_data.intent.name
            }
            this.messages.push(data)
          } else {
            const data = {
              event: m.event,
              timestamp: m.timestamp,
              text: m.text,
              intent: m.metadata.utter_action
            }
            this.messages.push(data)
          }
        }
        channel.ack(msg)
      }
    }
    const channel = this.app.get('rabbitmqClient')
    await channel.consume('rasa-q', consumer(channel))
    return this.messages
  }
  async update(id: NullableId, data: any, params: Params) {}
  async patch(id: NullableId, data: any, params: Params) {}
  async remove(id: NullableId, params: Params) {}
}
export const getOptions = (app: Application) => {
  return { app }
}