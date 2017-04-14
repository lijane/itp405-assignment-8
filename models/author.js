var bookshelf = require('./../bookshelf');

var Author = bookshelf.Model.extend({
	tableName: 'authors'
});

module.exports = Author;