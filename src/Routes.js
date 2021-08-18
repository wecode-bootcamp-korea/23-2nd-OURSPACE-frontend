import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import ReserveComp from './pages/Detail/ReserveComp';
import Detail from './pages/Detail/Detail';
import List from './pages/List/List';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/reserve" component={ReserveComp} />
          <Route exact path="/list" component={List} />
          <Route exact path="/list:search" component={List} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
