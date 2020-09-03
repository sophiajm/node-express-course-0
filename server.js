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

// GET requests to the server
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

// POST request to send data securely through the request body
// in order to make POST requests, need to include "body-parser" library from node_modules
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// write a function to handle a POST request made to the 'login' endpoint - user trying to log on
app.post('/login',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername="billyTheKid";
 	  const mockPassword="superSecret";

    if (username===mockUsername && password===mockPassword){
      res.jason({
        success:true,
        message:'password and username match!',
        token:'encrypted token goes here'
      })
    } else {
        res.jason({
          success:false,
          message:'password and username do not match'
        })
    }
})

// Before closing out this course, try a few more things in Postman:
 // Change the password value in the body tab to see what an incorrect password response looks like
 // Try our earlier requests that we made from the browser (remember to switch to GET in Postman)
 // See if you can make a new endpoint in the server.js code, then call it from Postman

app.listen(8000, function(){
  console.log("server is listening")
})

// run by typing node server.js in cmd, access at base url http://localhost:8000
