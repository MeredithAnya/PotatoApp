var Store = require('flux/utils').Store;

var AppDispatcher = require('../dispatcher/dispatcher');

var _potatoes = {}

var PotatoStore = new Store(AppDispatcher);

PotatoStore.all = function(){
  return _potatoes; 
};

PotatoStore.find = function(id){
	return _potatoes[id];
}

var resetPotatoes = function(potatoPosts){
   _potatoes = {}
   var index = 1;
   potatoPosts.items.forEach(function(potatoPost){
   	 _potatoes[index] = potatoPost;
   	 index += 1
   });
 
   return _potatoes;
};


PotatoStore.__onDispatch = function(payload){
  switch(payload.actionType){
  	case "POTATOES_RECEIVED":
	    resetPotatoes(payload.potatoPosts);
	  	PotatoStore.__emitChange();
	  	break;
  	
  }
};


module.exports = PotatoStore;