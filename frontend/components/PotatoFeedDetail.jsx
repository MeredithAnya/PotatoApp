var React = require('react');
var Link = require('react-router').Link;

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
			    <Link to="/post/1"><h1>{this.props.title}</h1></Link>
			    <ul className="potato-feed-detail-info">
				  <li><a href={"https://flickr.com/people/" + this.props.authorId}>{authorName}</a></li>
				  <li>{this.getDate()}</li>
				  <li><a href={this.props.linkToFlickr}>View on Flickr</a></li>
				</ul>  
			  </section>
			</div>
			);
	}

});

module.exports = PotatoFeedDetail;