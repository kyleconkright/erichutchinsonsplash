(function() {
  $(function() {
    return $.ajax({
      url: 'http://api.bandsintown.com/artists/erichutchinson/events.json?callback=?&app_id=hutch',
      type: 'GET',
      dataType: 'jsonp',
      success: function(results) {
        return $.each(results, function() {
          var date, show, soldout, tickets;
          date = this.datetime.split("T");
          show = date[0].split("-");
          tickets = '<a href="' + this.ticket_url + '" target="_blank" class="tickets"> tickets <i class="fa fa-ticket"></i></a>';
          if (this.venue.region === "MN") {
            soldout = 'Sold Out';
          } else {
            soldout = '';
          }
          return $('<div class="frame"><div class="bit-6">' + show[1] + '-' + show[2] + '-' + show[0] + '</div> <div class="bit-2"><span class="city">' + this.venue.city + ', ' + this.venue.region + '</span> - ' + this.venue.name + '</div> <div class="bit-6"><span class="so">' + soldout + '</span></div> <div class="bit-6">' + tickets + '</div></div>').appendTo('div.shows');
        });
      }
    });
  });

}).call(this);
