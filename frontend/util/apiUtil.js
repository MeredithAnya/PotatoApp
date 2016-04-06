var PotatoActions = require('../actions/potatoActions');

var ApiUtil = {
  fetchPotatoes: function(){
	  $.ajax({
	  	url: '//api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=?',
	  	type: 'GET',
	  	dataType: 'jsonp',
	  	jsonp: 'jsonFlickrFeed',
	  	data: {
	  		format: 'json'
	  	},
	  	success:(function(potatoPosts){
	  		PotatoActions.receivePotatoes(potatoPosts);
	  	})
	  });
  }
} 


module.exports = ApiUtil;