import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './app';
import IndexContainer from './index/index_container';
import StoriContainer from './storis/stori_container';
import StoriFormContainer from './storis/stori_form_container';

const Root = ({ store }) => {
  const ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={IndexContainer} />
          <Route path="/storis/:id" component={StoriContainer} />
          <Route path="/new" component={StoriFormContainer} onEnter={ensureLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: React.PropTypes.shape({
    getStore: React.PropTypes.func,
    dispatch: React.PropTypes.func,
  }).isRequired,
};

export default Root;
