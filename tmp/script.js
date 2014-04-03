(function() {
  $(function() {
    return $.ajax({
      url: 'http://api.bandsintown.com/artists/erichutchinson/events.json?callback=?&app_id=hutch',
      type: 'GET',
      dataType: 'jsonp',
      success: function(results) {
        return $.each(results, function() {
          var date, show;
          date = this.datetime.split("T");
          show = date[0].split("-");
          console.log(date[1]);
          return $('<div class="col-md-2">' + show[1] + '-' + show[2] + '-' + show[0] + '</div><div class="col-md-7"><span class="city">' + this.venue.city + ', ' + this.venue.region + '</span> - ' + this.venue.name + '</div></div><div class="col-md-3"><a href="' + this.ticket_url + '" target="_blank" class="tickets"><i class="fa fa-ticket"></i> tickets</a></div>').appendTo('div.shows');
        });
      }
    });
  });

}).call(this);
