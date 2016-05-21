var mongoose = require('mongoose');
//go back up 2 folders and to controllers/cats rotues
var users = require('../controllers/users.js')
var topics = require('../controllers/topics.js')
var posts = require('../controllers/posts.js')
var comments = require('../controllers/comments.js')

module.exports = function(app){
	//display all users
	app.get('/users', function (req, res){
	  users.index(req,res);
	})
	app.get('/users/:id', function (req,res){
		//access :id from req.params.id
		users.show(req,res);
	})

	app.post('/users', function (req, res){
		users.create(req,res);
	})
	app.get('/topics', function (req, res){
	  topics.index(req,res);
	})

	app.post('/topics', function (req, res){
		console.log('req.body topics', req.body)
		topics.create(req,res);
	})
	app.get('/topics/:id', function(req,res){
		console.log('req params in topic',req.params)
		topics.show(req,res);
	})
	app.post('/posts', function(req,res){
		console.log('req.body add post', req.body)
		posts.create(req,res);
	})
	app.post('/comments', function(req,res){
		console.log('req.body add comment', req.body)
		comments.create(req,res);
	})

	app.get('/posts/:id/like', function(req,res){
		console.log('im in post lies', req.params.id)
		posts.like(req,res);
	})
	app.post('/posts/:id/dislike', function(req,res){
		posts.dislike(req,res);
	})

}


