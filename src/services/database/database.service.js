const DatabaseAbstract = require("../../libs/database/database.lib");

module.exports = class DatabaseService extends DatabaseAbstract {
    constructor() { 
        super()
        this.startConnection()
    }
}