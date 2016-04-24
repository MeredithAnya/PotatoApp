var React = require('react');

var PotatoFeedDetail = React.createClass({

	render: function(){
		return (
			<div className="potato-feed-detail-container">
			  <img src="http://farm2.staticflickr.com/1445/26522341331_d2ce4880a6_m.jpg"></img>
			  <section className="potato-feed-detail-section">
			    <h1>Title</h1>
			    <ul className="potato-feed-detail-info">
				  <li>Published Day</li>
				  <li>Author</li>
				  <li>View On Flickr</li>
				</ul>  
			  </section>
			</div>
			);
	}

});

module.exports = PotatoFeedDetail;