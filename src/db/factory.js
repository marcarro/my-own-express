const FakeService = require('./fake/service');

class DBFactory {
    static create() {
        return new FakeService();
    }
}

module.exports = DBFactory;
