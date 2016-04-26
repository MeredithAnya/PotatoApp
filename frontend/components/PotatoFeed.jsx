var React = require('react');
var PotatoStore = require('../stores/potatoStore');
var PotatoFeedDetail = require('./PotatoFeedDetail');
var ApiUtil = require('../util/apiUtil');

var PotatoFeed = React.createClass({
  getInitialState: function(){
     return {potatoPosts: PotatoStore.all()}
  },
  componentDidMount: function(){
  	this.potatoToken = PotatoStore.addListener(this.onChange);
  	ApiUtil.fetchPotatoes();
  },
  onChange: function(){
  	this.setState({potatoPosts: PotatoStore.all()})
  },
  getPotatoList: function(){
    var author;
    var published;
    var linkToFlickr;
    var media;
    var title;
    var tags;
    
    if (this.state.potatoPosts[1]) {
      var posts = this.state.potatoPosts;
      var potatoesList = Object.keys(posts).map(function(key){
        linkToFlickr = posts[key].link;
        published = posts[key].published;
        media = posts[key].media.m;
        authorId = posts[key].author_id;
        author = posts[key].author;
        //use flickr.com/people/author_id
        title = posts[key].title;
        tags = posts[key].tags;
        return <PotatoFeedDetail key={key} 
                                 linkToFlickr={linkToFlickr}
                                 published={published}
                                 author={author}
                                 media={media}
                                 title={title}
                                 tags={tags}/>;
      });

      return potatoesList;
    }

    //if statement here and get the list of potato feeds
  },	
  render: function () {

    var potatoesList = this.getPotatoList();
    debugger;

    return(
      <div className="potato-feed-header">
        <h1 className="potato-title">POTATO FEED</h1>
        <ul className="potato-feed-list">
          {potatoesList}
        </ul>
      </div>
    );
  }
});

module.exports = PotatoFeed;