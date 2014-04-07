$ ->

	$.ajax
		url: 'http://api.bandsintown.com/artists/erichutchinson/events.json?callback=?&app_id=hutch'
		type: 'GET'
		dataType: 'jsonp'
		success: (results) ->
			$.each results, ->
				date = this.datetime.split "T"
				show = date[0].split "-"
				tickets = '<a href="' + this.ticket_url + '" target="_blank" class="tickets"> tickets <i class="fa fa-ticket"></i></a>'
				if this.venue.region is "MN"
					soldout = 'Sold Out'
				else
					soldout = ''

				$('<div class="frame"><div class="bit-6">' + show[1] + '-' + show[2] + '-' + show[0] + '</div>
					<div class="bit-2"><span class="city">' + this.venue.city + ', ' + this.venue.region + '</span> - ' + this.venue.name + '</div>
					<div class="bit-6"><span class="so">' + soldout + '</span></div>
					<div class="bit-6">' + tickets + '</div></div>')
					.appendTo('div.shows')

	# $.ajax
	# 	url: 'data/data.json'
	# 	type: 'GET'
	# 	dataType: 'json'
	# 	success: (results) ->