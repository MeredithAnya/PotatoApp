var React = require('react');

var PotatoFeedDetail = React.createClass({

	render: function(){
		return (
			<div className="potato-feed-detail-container">
			  <li>image</li>
			  <ul className="potato-feed-detail-info">
			  <li>Title</li>
			  <li>Published Day</li>
			  <li>Author</li>
			  <li>View On Flickr</li>
			  </ul>
			</div>
			);
	}

});

module.exports = PotatoFeedDetail;