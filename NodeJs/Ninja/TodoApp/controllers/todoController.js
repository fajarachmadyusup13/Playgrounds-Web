const bodyParser = require('body-parser');
const mongoose   = require('mongoose');

mongoose.connect('mongodb://test:test@ds157712.mlab.com:57712/todo_fjr', {useMongoClient: true});
mongoose.Promise = global.Promise;


const todoSchema  = new mongoose.Schema({
  item: String
});

const Todo        = mongoose.model('Todo', todoSchema);
// const itemOne     = Todo({item: 'boo in zoo'}).save((err) => {
//   if (err) throw err;
//   console.log('item saved');
// });

const urlencodedParser = bodyParser.urlencoded({ extended: false });


module.exports = (app) => {

  app.get('/todo', (req, res) => {
    // get data from mongodb
    Todo.find({}, (err, data) => {
        if (err) throw err;
        res.render('todo', {todos: data});
    });
  });

  app.post('/todo', urlencodedParser, (req, res) => {
    // get data from view and add it to mongodb
    Todo(req.body).save((err, data) => {
      if (err) throw err;
      res.json(data);
      console.log('item saved');
    });
  });

  app.delete('/todo/:item', (req, res) => {
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove((err, data) => {
      if (err) throw err;
      res.json(data);
      console.log('deleted');
    });
  });

};
