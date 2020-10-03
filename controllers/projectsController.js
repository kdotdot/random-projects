let projects = require("../projects.json");

module.exports = function(app) {

  app.get('/projects', function(req, res) {
    res.render("pages/projects.ejs", {data: projects});
  });

}
