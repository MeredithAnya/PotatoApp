var AppDispatcher = require('../dispatcher/dispatcher');

var PotatoActions = {
	receivePotatoes: function(potatoPosts){
		AppDispatcher.dispatch({
			actionType: "POTATOES_RECEIVED",
			potatoPosts: potatoPosts
		});
	}
	

};

module.exports = PotatoActions;