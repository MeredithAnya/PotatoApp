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
    

    //if statement here and get the list of potato feeds
  },	
  render: function () {

    var potatoesList = this.getPotatoList();
    

    return(
      <div className="potato-feed-header">
        <h1 className="potato-title">POTATO FEED</h1>
        <ul className="potato-feed-list">
          <PotatoFeedDetail/>
          <PotatoFeedDetail/>
          <PotatoFeedDetail/>
          <PotatoFeedDetail/>
          <PotatoFeedDetail/>
        </ul>
      </div>
    );
  }
});

module.exports = PotatoFeed;