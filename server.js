const express = require('express');
const bodyParser = require('body-parser');

// create json express app
const app = express();

// parse urlencoded requests
app.use(bodyParser.urlencoded({ extended: true }))

// parse json requests
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./database/config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database.', err);
    process.exit();
});

// Serve BootStrap HTML template.
app.use(express.static("public"));

// Require portfolio routes
require('./routes/portfolio.js')(app);


// listen for json requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
