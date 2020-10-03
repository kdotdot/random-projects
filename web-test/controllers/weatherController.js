var bodyParser = require('body-parser');
var request = require('request');

const apiKey = '0a5838ea0eb3fd27badda050db7af515'

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
  app.get('/weather', function(req, res) {
    res.render('pages/weather', {
      weather: null,
      error: null
    });
  });

  app.post('/weather', urlencodedParser, function(req, res) {

    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

    data = {
      weather: null,
      error: null
    };

    request(url, function(err, response, body) {
      if (err) {
        data.error = 'Error, no se puede acceder a la API correctamente';
      } else {
        let weather = JSON.parse(body);
        if (weather.main == undefined) {
          data.error = 'Error, intentalo de nuevo';
        } else {
          data.weather = weather;
        }
      }
      res.render('pages/weather', data);
    });

    //res.render('pages/weather');
  });
}
