(function() {
  $(function() {
    return $.ajax({
      url: 'http://api.bandsintown.com/artists/erichutchinson/events.json?callback=?&app_id=joepurdy',
      type: 'GET',
      dataType: 'jsonp',
      success: function(results) {
        return $.each(results, function() {
          var date, show;
          date = this.datetime.split("T");
          show = date[0].split("-");
          return $('<div class="bit-1 date"></div>').append('<div class="bit-2">' + show[1] + '-' + show[2] + '-' + show[0] + '</div><div class="bit-2">' + this.venue.city + ', ' + this.venue.region + ' @ ' + this.venue.name + '<p class="tickets"> Tickets <i class="fa fa-ticket"></i></p></div>').appendTo('.shows');
        });
      }
    });
  });

}).call(this);
