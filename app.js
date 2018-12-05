var express = require('express');
var todoController = require('./controllers/todoController');
var weatherController = require('./controllers/weatherController');
var projectsController = require('./controllers/projectsController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);
weatherController(app);
projectsController(app);

app.get('/', function(req, res) {
  res.render("pages/index.ejs");
});

//listen to port
app.listen(process.env.PORT || 3000);
console.log("Listening on port:" + 3000);
