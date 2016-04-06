var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var PotatoStore = require('./stores/potatoStore');

var App = require('./components/App');


var routes = (
  <Route path="/" component={App}>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('content'));
});

