require('dotenv').config()
const Container = require('./src/services/container/container.service')

const container = new Container()

container.startContainer()

const messageService = container.getService('message.service')

messageService.logMessageSended()