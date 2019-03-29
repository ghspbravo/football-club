import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import './app.css';

// components
import header from './components/header/header';

// pages
import account from './pages/account/account';
import inDevelop from './pages/development/inDevelop';
import auth from './pages/auth/auth';
import club from './pages/club/club';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/development" />
          <Route path="/auth" />
          <Route component={header} />
        </Switch>

        <Route path="/auth" component={auth} />
        <Route exact path="/accaunt" component={account} />

        <Route path="/club/:id" component={club} />

        <Route exact path="/development" component={inDevelop} />
      </Router>
    );
  }
}

export default App;
