const express     = require('express');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');

// Set up express app
const app     = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago', {useMongoClient: true});
mongoose.Promise = global.Promise;

// initialize static file as midleware
app.use(express.static('public'));

// initialize bodyParser as midleware
app.use(bodyParser.json());

// initialize routes as midleware
app.use('/api', require('./routes/api'));

// initialize error handling middleware
app.use((err, req, res, next) => {
  // console.log(err.message);
  res.status(422).send({error: err._message});
});

// Listen for request
app.listen(process.env.port || 4000, () => {
  console.log('Now listening for request');
});
