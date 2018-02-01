import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* <Route exact path='/' component={Homepage} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
