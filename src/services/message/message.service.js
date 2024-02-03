const MessageAbstract = require("../../libs/message/message.lib");

const ActionTypes = {
    LISTEN: 'listen',
    SAVE: 'salvar!!!',

}

module.exports = class MessageService extends MessageAbstract {
    constructor() {
        super()
        this.initialize()
        this.mainUser = `${process.env.MAIN_USER}@c.us`
        this.action = ActionTypes.LISTEN
    }
    mainUser
    action
    logMessageSended() {
        this.listenSended(async (message) => {
            if (this.action === ActionTypes.SAVE) {
                console.log('salvei');
                this.action = ActionTypes.LISTEN
                return
            }
            if (message.to === this.mainUser && this.action === ActionTypes.LISTEN)
                switch (message.body) {
                    case ActionTypes.SAVE:
                        this.action = ActionTypes.SAVE
                        break;

                    default:
                        console.log("não entendi");
                        break;
                }
        })
    }
}