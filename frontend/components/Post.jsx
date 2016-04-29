var React = require('react');
var PotatoStore = require('../stores/potatoStore');


var Post = React.createClass({
	contextTypes: {
     router: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
      return {post: PotatoStore.find(parseInt(this.props.params.id))};
    },
    componentDidMount: function(){
	  this.potatoToken = PotatoStore.addListener(this.onChange);
	},
    onChange: function(){
  	  this.setState({post: PotatoStore.find(parseInt(this.props.params.id))})
    },

	render: function(){
		debugger;
		if (this.state.post){
			var description = this.state.post.description;
		}
		return (
			<div></div>
			);
	}

});

module.exports = Post;