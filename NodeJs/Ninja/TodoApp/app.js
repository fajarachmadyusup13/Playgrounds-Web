const express         = require('express');
const todoController  = require('./controllers/todoController');
const app             = express();

// set up template engine
app.set('view engine', 'ejs');

// static file
app.use(express.static('./public'));

// fire controllers
todoController(app);

// listen to port
app.listen(3000);
