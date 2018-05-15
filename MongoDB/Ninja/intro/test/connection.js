const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to the DB before run test
before((done) => {
  // Connect to DB
  mongoose.connect('mongodb://127.0.0.1/testaroo', {
    useMongoClient: true
  });

  mongoose.connection.once('open', () => {
    console.log('Connection has been made now make fireworks');
    done();
  }).on('error', (error) => {
    console.log('Connection error', error);
  });

});


// Drop the characters collection before each test
beforeEach((done) => {
  // Drop the collection
  mongoose.connection.collections.mariochars.drop(() => {
    done();
  });
});
