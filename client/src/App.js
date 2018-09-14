import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import LogIn from './components/Login';
import Jokes from './components/Jokes';
import Register from './components/Register';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Route exact path="/" component={LogIn} />
      <Route path="/signup" component={Register} />
      <Route path="/jokes" component={Jokes} />
      </div>
    );
  }
}

export default withRouter(App);
