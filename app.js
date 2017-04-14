require ('dotenv').config();

var express = require('express');
var app = express();
var Review = require('./models/review');
var Book = require('./models/book');
var bodyParser = require('body-parser');
var cors = require ('cors');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

//Question 1 - Get display all reviews
app.get('/api/v1/reviews',function(request, response){
	Review.fetchAll().then(function(reviews){
	response.json(reviews);
	});
});

//Question 2 - Get display book with publishers & authors
app.get('/api/v1/books/:id', function(request,response){
	Book
		.where('id', request.params.id)
		.fetch({ require: true, withRelated:['author','publisher'] }) // require: true rejects promise if song isnt found
		.then(function(book) {
			response.json(book);
		}, function(){
			response.json({
				error: 'Book cannot be found'
			});
		});
});

//Question 3 - Post create new review in database
app.post('/api/v1/reviews', function(request, response){
	var review = new Review({
		// book_id: 1,
		// headline: 'Jane - Sample headline',
		// body: 'Jane - Sample body',
		// rating: 1
		book_id: request.body.book_id,
		headline: request.body.headline,
		body: request.body.body,
		rating: request.body.rating
	});

	review.save().then(function(){
		response.json(review);
	});
});

app.listen(8000);