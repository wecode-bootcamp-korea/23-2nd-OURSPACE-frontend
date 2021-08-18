import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import ReserveComp from './pages/Detail/ReserveComp';
import Detail from './pages/Detail/Detail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/reserve" component={ReserveComp} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
