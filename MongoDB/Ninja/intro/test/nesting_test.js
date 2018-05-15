const assert = require('assert');
const Author = require('../models/author');
const mongoose = require('mongoose');

// describe our test
describe('Nesting records', () => {


  beforeEach((done) => {
    mongoose.connection.collections.authors.drop(() => {
      done();
    });
  });


  // create test
  it('Create an author with sub-documents', (done) => {

    const pat = new Author({
      name  : 'Patrick',
      books : [
        {
          title : 'Name of the wind',
          pages : 100
        }
      ]
    });

    pat.save().then(() => {
      Author.findOne({name: 'Patrick'}).then((record) => {
        assert(record.books.length === 1);
        done();
      });
    });

  });


  it('Adds a book to an author', (done) => {

    const pat = new Author({
      name  : 'Patrick',
      books : [{title : 'Name of the wind', pages : 100}]
    });

    pat.save().then(() => {
      Author.findOne({name: 'Patrick'}).then((record) => {
        record.books.push({title: "Wise Man's Fear", pages:500});
        record.save().then(() => {
          Author.findOne({name: 'Patrick'}).then((result) => {
            assert(result.books.length === 2);
            done();
          });
        });
      });
    });

  });



});
