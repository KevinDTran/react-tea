import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import './update';

render(
  <Router history={browserHistory}>
    <Route path="/" component={require('./view/layout')}>
      <IndexRoute component={require('./view/home')} />
      <Route path="/page-b" component={require('./view/page-b')} />
    </Route>
  </Router>, 
  document.getElementById('app')
);
