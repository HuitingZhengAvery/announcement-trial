import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import { Main } from '../../components';
//path to be corrected
const App = (props) => {
  return (
    <Switch>
      <Route exact path="/announcement" component={Main} />
    </Switch>
  )
}

export default withRouter(App);