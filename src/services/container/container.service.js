const ContainerAbstract = require('../../libs/container/container.lib')
const DatabaseService = require('../database/database.service')
const MessageService = require('../message/message.service')
const RegisterModel = require('../register/register.model')
const RegisterService = require('../register/register.service')


module.exports = class Container extends ContainerAbstract {
    /**
     * @param {Object[]} servicesToRegister - services to regiter
     * @param {string} servicesToRegister[].id - identifier of service
     * @param {class} servicesToRegister[].classRegister - class
     * @param {ContainerAbstract} servicesToRegister[].container - container
     */

    constructor(servicesToRegister) {
        super()
        this._services = [
            { id: 'message.service', classRegister: MessageService, container: this },
            { id: 'database.service', classRegister: DatabaseService, container: this },
            { id: 'register.model', classRegister: RegisterModel, container: this },
            { id: 'register.service', classRegister: RegisterService, container: this },
        ]
        this._services = servicesToRegister ? [...this._services, ...servicesToRegister] : this._services
    }
    _services
    startContainer() {
        for (const service of this._services) {
            this.register(service.id, service.classRegister, service.container)
        }
    }
}