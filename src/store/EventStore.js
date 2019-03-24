var BaseStore = require('./BaseStore');

function EventStore() {
    this.name = "Event";
    BaseStore.call(this);
}

EventStore.prototype = Object.create(BaseStore.prototype);

Object.defineProperty(EventStore.prototype, 'constructor', {
    value: EventStore,
    enumerable: false,
    writable: true
});

module.exports = EventStore;