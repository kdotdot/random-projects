module.exports = function(app) {
  app.get("/projects", function(req, res) {
    res.render("pages/projects.ejs");
  });

  app.get("/projects/p5/flocking", function(req, res) {
    res.render("pages/projects/p5/flocking.ejs");
  });
};
