const express     = require('express');
const bodyParser  = require('body-parser');

const app               = express();
const urlencodedParser  = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get('/',(req, res) => {
  res.render(`index`);
});

app.get('/contact', (req, res) => {
  console.log(req.query);
  res.render(`contact`, {
    qs : req.query
  });
});

app.post('/contact', urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render(`contact-success`, {
    data: req.body
  });
});

app.get('/profile/:name', (req, res) => {
  let data = {
    age     : 20,
    job     : `ninja`,
    hobbies : [
      `eating`,
      `fighting`,
      `fishing`,
    ]
  };
  res.render(`profile`, {
    person  : req.params.name,
    data    : data
  });
});

app.listen(3000);
