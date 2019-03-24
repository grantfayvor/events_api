var EventStore = require('../store/EventStore');

function EventController() {
    this.store = new EventStore();
}

EventController.prototype = Object.create(require('./BaseController').prototype);

module.exports = EventController;