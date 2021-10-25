import React, {Component} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {Login} from './Screens';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusLogin: false,
    };
  }
  render() {

    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          {!this.state.statusLogin ? (
            <Route path="/" children={props => <Login {...props} />} />
          ) : (
            <Route path="/admin" children={props => <Admin {...props} />} />
          )}
        </Switch>
      </Router>
    );
  }
}

export default App;
