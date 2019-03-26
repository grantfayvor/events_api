var BaseStore = require('./BaseStore');

function UserStore() {
    this.name = "User";
    BaseStore.call(this);
}

UserStore.prototype = Object.create(BaseStore.prototype);

Object.defineProperty(UserStore.prototype, 'constructor', {
    value: UserStore,
    enumerable: false,
    writable: true
});

module.exports = UserStore;