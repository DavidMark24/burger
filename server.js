const express = require('express');
const exphbs = require('express-handlebars');


const app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));
// app.use(express.static('public'));

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Handlebars

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


const router = require('./controllers/burgers_controller.js');
app.use('/', router);

// Open Server
const PORT = process.env.PORT || 3000;
app.listen(PORT);