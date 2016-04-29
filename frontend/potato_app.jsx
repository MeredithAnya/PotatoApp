var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var App = require('./components/App');
var Post = require('./components/Post');
var PotatoFeed = require('./components/PotatoFeed');


var routes = (
  <Route path="/" component={App}>
  <Route path="feed" component={PotatoFeed}></Route>
  <Route path="post/:id" component={Post}></Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('content'));
});

