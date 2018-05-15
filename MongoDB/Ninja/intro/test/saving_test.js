const assert    = require('assert');
const MarioChar = require('../models/mariochar');

// Describe test
describe('Saving records', () => {

  // Create test
  it('Saves a record to the database', (done) => {
    let char = new MarioChar({
      name    : 'Luigi',
      weight  : 20
    });

    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });
  });



});
