// NO SE UTILIZA

$(document).ready(function() {

  $('form').on('submit', function() {

    var name = $('form input');
    var city = {
      city: name.val()
    };
    console.log('ala es grande');
    $.ajax({
      type: 'POST',
      url: '/weather',
      data: city,
      success: function(data) {
        //do something with the data via front-end framework
        location.reload();
      }
    });

    return false;

  });

});