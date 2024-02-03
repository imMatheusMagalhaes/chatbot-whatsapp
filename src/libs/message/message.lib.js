const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

module.exports = class MessageAbstract {
    _messageClient
    constructor() {
        this._messageClient = new Client({
            authStrategy: new LocalAuth({
                dataPath: 'auth'
            })
        });
        /* this._messageClient.on("message_create", (para) =>{para.downloadMedia}) */
    }

    initialize() {
        this._messageClient.on('qr', (qr) => {
            console.info("Authentication required")
            qrcode.generate(qr, { small: true });
        });

        this._messageClient.on('ready', () => {
            console.info('Client is ready!');
        });
        this._messageClient.initialize();
    }

    /**
     * @param {String} from - contact to send
     * @param {String} message - message to send
     */
    async sendMessage(from, message) {
        if (!message || typeof message !== 'string' || message === '')
            throw new Error('message is required string')
        if (!from || typeof from !== 'string' || from === '')
            throw new Error('from is required string')
        return setTimeout(async () => await this._messageClient.sendMessage(from, message), 10000)
    }


    /**
     * This callback type is called `requestCallback` and is displayed as a global symbol.
     *
     * @callback listenCallback
     * @param {Object} message
     */       
    /**
     * @param {listenCallback} callback - callback function 
     */

    listenReceived(callback) {
        this._messageClient.on('message', callback);
    }

    /**
     * @param {listenCallback} callback - callback function 
     */
    listenSended(callback) {
        this._messageClient.on('message_create', callback);
    }

}