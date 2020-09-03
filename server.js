const express = require('express'); // gives access to the express library by searching node_modules for 'express'
const app = express(); // creates an instance of the express constructor, which we will name 'app'

// // now access methods used for making a server by including their name after the app
// app.listen(8000, function(){
//   console.log("server is running")
// })
// // the app.listen method starts us the server locally on the port you give as its first argument, here base url http://localhost:8000

// now return some mock JSON data
const mockUserData=[
  {name:'Mark'},
  {name:'Jill'}
]

app.get('/users', function(req,res){
 	res.json({
 	 	success: true,
 	 	message: 'successfully got users. Nice!',
 	 	users: mockUserData
 	})
})

// words with colon in front of them in URL are treated as variables
// variables can be accessed through req.params
app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})
// Dynamic variables can be used to search for and return specific data associated with an id in the database

app.listen(8000, function(){
  console.log("server is listening")
})

// run by typing node server.js in cmd, access at base url http://localhost:8000
