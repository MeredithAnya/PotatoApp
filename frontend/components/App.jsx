var React = require('react');
var PotatoFeed = require('./PotatoFeed');

var App = React.createClass({
	render: function(){
		return (
			<div><PotatoFeed/></div>
			);
	}

});

module.exports = App;