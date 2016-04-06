var React = require('react');
var PotatoStore = require('../stores/potatoStore');

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
      <div>{potatoesList}</div>
    );
  }
});

module.exports = PotatoFeed;