var BaseModel = require('../models/BaseModel');

function ModelFactory(schemaName) {
    // BaseModel = BaseModel.bind(BaseModel, schemaName);
    switch (schemaName) {
        case "Event":
            return BaseModel(schemaName, require('../schemas/Event'));
        case "User":
            return BaseModel(schemaName, require('../schemas/User'));
        default:
            throw new Error("An invalid schema name was passed to model factory.");
    }
}

module.exports = ModelFactory;