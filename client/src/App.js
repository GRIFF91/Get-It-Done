import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./pages/home";
import register from "./pages/register";
import addChore from "./pages/addchore";
import createPool from "./pages/createPool";
import poolManager from "./pages/poolManager";
import poolMember from "./pages/poolMember";
import Nav from "./components/nav";
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {<Route exact path='/' component={home} />}
            {<Route exact path='/register' component={register} />}
            {<Route exact path='/addchore' component={addChore} />}
            {<Route exact path='/createPool' component={createPool} />}
            {<Route exact path='/poolManager' component={poolManager} />}
            {<Route exact path='/poolMember' component={poolMember} />}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
