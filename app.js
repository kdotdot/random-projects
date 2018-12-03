var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.send("Hello")
});

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('Listening to port 3000');