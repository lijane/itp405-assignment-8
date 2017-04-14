var bookshelf = require('./../bookshelf');
var Publisher = require('./publisher');
var Author = require('./author');

var Book = bookshelf.Model.extend({
	tableName: 'books',
	publisher: function(){
		return this.belongsTo(Publisher);
	},
	author: function(){
		return this.belongsTo(Author);
	}
});

module.exports = Book;