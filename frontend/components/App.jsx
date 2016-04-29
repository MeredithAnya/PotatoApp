var React = require('react');
var PotatoFeed = require('./PotatoFeed');
var Link = require('react-router').Link;

var App = React.createClass({
	render: function(){
		return (
			<div>
			<Link to="/feed"><h1>CHECK OUT CURRENT POTATO FEED</h1></Link>
			{this.props.children}
			</div>
			);
	}

});

module.exports = App;