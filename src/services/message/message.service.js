const MessageAbstract = require("../../libs/message/message.lib");

const ActionTypes = {
    LISTEN: 'listen',
    SAVE: 'salvar!!!',

}

module.exports = class MessageService extends MessageAbstract {
    constructor(container) {
        super()
        this.initialize()
        this.mainUser = `${process.env.MAIN_USER}@c.us`
        this.action = ActionTypes.LISTEN
        this._container = container
    }
    mainUser
    action
    logMessageSended() {
        const register = this._container.getService('register.service')
        this.listenSended(async (message) => {
            if (this.action === ActionTypes.SAVE) {
                await register.createRegister(message.body)
                await this.sendMessage(this.mainUser, 'salvei')
                this.action = ActionTypes.LISTEN
                return
            }
            if (message.to === this.mainUser && this.action === ActionTypes.LISTEN)
                switch (message.body) {
                    case ActionTypes.SAVE:
                        this.action = ActionTypes.SAVE
                        break;

                    default:
                        console.log("não identifiquei");
                        break;
                }
        })
    }
}