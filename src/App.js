import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './app.css';

// components
import header from './components/header/header';

// pages
import account from './pages/account/account';
import inDevelop from './pages/development/inDevelop';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/development" />
          <Route component={header} />
        </Switch>

        <Route exact path="/" component={account} />
        <Route exact path="/development" component={inDevelop} />
      </Router>
    );
  }
}

export default App;
