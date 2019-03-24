function BaseStore() {
    this.model = require('../models/ModelFactory')(this.name);
}

BaseStore.prototype.save = function (doc, options, callback) {
    confirmArguments(arguments, 3, () => {
        callback = options;
        options = null;
    });
    new this.model(doc).save(options, callback);
};

BaseStore.prototype.get = function (query, projections, callback) {
    confirmArguments(arguments, 3, () => {
        callback = projections;
        projections = null;
    });
    this.model.find(query, projections, callback);
};

module.exports = BaseStore;


function isNotFullArguments(arguments, expectedLength) {
    return !(arguments.length >= expectedLength);
}

function confirmArguments(arguments, expectedLength, fn) {
    if (isNotFullArguments(arguments, expectedLength)) {
        fn();
    }
};