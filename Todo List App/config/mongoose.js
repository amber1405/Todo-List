// require the liberary
const mongoose = require('mongoose');

// connect to the database
const url='mongodb://127.0.0.1:27017/directConnection=true&serverSelectionTimeoutMS=2000';

mongoose.connect(url);

// mongoose.connect('mongodb://localhost/todo_app_db');

// aquire teh mongoose.connection(to check if it is successful)
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, "Error connecting to db"));

// up and running then print the message
db.once('open', function(){
    console.log("Successfully connected to database.");
});