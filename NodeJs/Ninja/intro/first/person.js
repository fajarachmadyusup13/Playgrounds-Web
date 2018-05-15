const events = require('events');

class Person extends events.EventEmitter{
  constructor(name) {
    super();
    this.name = name;
  }
}

module.exports = {
  Person : Person
};
