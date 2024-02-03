const ContainerAbstract = require('../../libs/container/container.lib')
const MessageService = require('../message/message.service')


module.exports = class Container extends ContainerAbstract {
    /**
     * @param {Object[]} servicesToRegister - services to regiter
     * @param {string} servicesToRegister[].id - identifier of service
     * @param {class} servicesToRegister[].classRegister - class
     */
    
    constructor(servicesToRegister) {
        super()
        this._services = [{ id: 'message.service', classRegister: MessageService }]
        this._services = servicesToRegister ? [...this._services, ...servicesToRegister] : this._services
    }
    _services
    startContainer() {
        for (const service of this._services) {
            this.register(service.id, service.classRegister)
        }
    }
}