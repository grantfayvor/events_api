var _mongoose = require('mongoose');

module.exports = function (schemaName, schemaDefinition, schemaOpts) {
    if (isNotValidArgs(arguments, 2)) {
        console.log(arguments);
        throw new Error("There are some missing required parameters in this function");
    }
    let schema = new _mongoose.Schema(schemaDefinition, schemaOpts);
    return _mongoose.model(schemaName, schema);
};

function isNotValidArgs(args, minArgsLength) {
    return args.length < minArgsLength;
}