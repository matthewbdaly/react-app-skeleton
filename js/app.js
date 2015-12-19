import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import Page from './components/page';
import NoMatch from './components/nomatch';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={Page} />
    <Route path="*" component={NoMatch}/>
  </Router>,
  document.getElementById('view')
);
