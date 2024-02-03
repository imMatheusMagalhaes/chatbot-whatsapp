const { ContainerBuilder } = require('node-dependency-injection')

module.exports = class ContainerAbstract {
    constructor() {
        this._container = new ContainerBuilder()
    }
    _container
    
    /**
     * @param {String} id - identifier of class 
     * @param {class} classRegister - class to register
     */
    register(id, classRegister, container) {
        this._container.register(id, classRegister).addArgument(container)
    }

    /**
     * @param {string} id 
     */
    getService(id){
        return this._container.get(id)
    }
}