var bookshelf = require('./../bookshelf');

var Publisher = bookshelf.Model.extend({
	tableName: 'publishers'
});

module.exports = Publisher;