module.exports = class RegisterService {
    constructor(container) {
        this._container = container
    }
    async createRegister(data) {
        const register = this._container.getService('register.model')
        const doc = new register.model({ data })
        return await doc.save()
    }
}