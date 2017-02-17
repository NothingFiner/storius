import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './app';
import IndexContainer from './index/index_container';
import StoriContainer from './storis/stori_container';
import StoriFormContainer from './storis/stori_form_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={IndexContainer} />
        <Route path="/storis/:id" component={StoriContainer} />
        <Route path="/new" component={StoriFormContainer} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default Root;
