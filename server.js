const express = require('express'); // gives access to the express library by searching node_modules for 'express'
const app = express(); // creates an instance of the express constructor, which we will name 'app'

// now access methods used for making a server by including their name after the app
app.listen(8000, function(){
  console.log("server is running")
})
// the app.listen method starts us the server locally on the port you give as its first argument, here base url http://localhost:8000
