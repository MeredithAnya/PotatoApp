var React = require('react');

var PotatoFeedDetail = React.createClass({
    getDate: function(){
    	var date = new Date(this.props.published);
    	var parts = date.toString().split(" ");
    	var wanted = [parts[1], parts[2], parts[3]];


    	return "Published on " + wanted.join(" ");
    	

    },
	render: function(){
		
		var regExp = /\(([^)]+)\)/;
    	var authorName = regExp.exec(this.props.author);
    	if (authorName){
    		authorName = authorName[1];
    	}
	    
		return (
			<div className="potato-feed-detail-container">
			  <img src={this.props.media}></img>
			  <section className="potato-feed-detail-section">
			    <h1>{this.props.title}</h1>
			    <ul className="potato-feed-detail-info">
				  <li>{authorName}</li>
				  <li>{this.getDate()}</li>
				  <li>View on Flickr</li>
				</ul>  
			  </section>
			</div>
			);
	}

});

module.exports = PotatoFeedDetail;