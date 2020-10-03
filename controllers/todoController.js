var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb://kdotdot:test123@ds123844.mlab.com:23844/todo', {
  useNewUrlParser: true
});

//Create a schema (blueprint)
var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);

var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

module.exports = function(app) {

  app.get('/todo', function(req, res) {
    //get data from database and pass it to view
    Todo.find({}, function(err, data) {
      if (err) throw err;
      res.render('pages/todo', {
        todos: data
      })
    });
  });

  app.post('/todo', urlencodedParser, function(req, res) {
    //get data from view and add it to database
    var newTodo = Todo(req.body).save(function(err, data) {
      if (err) throw err;
      res.json(data);
    });
  });

  app.delete('/todo/:item', function(req, res) {
    //delete requested item from mongodb
    Todo.find({
      item: req.params.item.replace(/\-/g, " ")
    }).deleteOne(function(err, data) {
      if (err) throw err;
      res.json(data);
    });
  });

}