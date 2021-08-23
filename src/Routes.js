import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Detail from './pages/Detail/Detail';
import List from './pages/List/List';
import HostPost from './pages/Host/HostPost';
import SignIn from './pages/Sign/SignIn';
import Reserve from './pages/List/Reserve';
import Mypage from './pages/Mypage/Mypage';
import Review from './Review/Review';
import ReviewPost from './Review/ReviewPost';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/list" component={List} />
          <Route exact path="/list:search" component={List} />
          <Route exact path="/hostpost" component={HostPost} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/spaces/detail/:id" component={Detail} />
          <Route exact path="/reserve" component={Reserve} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/reviewpost" component={ReviewPost} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
