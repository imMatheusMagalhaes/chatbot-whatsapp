const mongoose = require('mongoose');

module.exports = class DatabaseAbstract {
    constructor() {
        this._host = process.env.DB_HOST
        this._name = process.env.DB_NAME
        this.Schema = mongoose.Schema
        this.model = mongoose.model
    }
    _host
    _name
    connection
    Schema
    model
    async startConnection() {
        console.info("start database connection")
        this.connection = await mongoose.connect(`mongodb://${this._host}/${this._name}`);
        console.info('database started');
    }


}