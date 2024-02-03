module.exports = class RegisterModel {
    constructor(container) {
        this._container = container
        this._databaseService = this._container.getService('database.service')
        this._schema = new this._databaseService.Schema({ data: String }, { timestamps: true })
        this.model = this._databaseService.model('register', this._schema)
    }
}