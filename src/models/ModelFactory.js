function ModelFactory(schemaName) {
    switch (schemaName) {
        case "Event":
            return require('../models/BaseModel')(schemaName, require('../schemas/Event'));
        default:
            throw new Error("An invalid schema name was passed to model factory.");
    }
}

module.exports = ModelFactory;