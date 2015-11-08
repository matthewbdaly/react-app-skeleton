var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var Page = require('./components/page.js');
var NoMatch = require('./components/nomatch.js');

ReactDOM.render(
  <Router>
    <Route path="/" component={Page} />
    <Route path="*" component={NoMatch}/>
  </Router>,
  document.getElementById('view')
);
