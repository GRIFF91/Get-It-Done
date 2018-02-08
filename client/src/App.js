import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./pages/home";
import register from "./pages/register";
import addChore from "./pages/addchore";
import createPool from "./pages/createPool";
import poolManager from "./pages/poolManager";
import poolMember from "./pages/poolMember";
import signIn from "./pages/signIn";
import poolTemplate from "./pages/poolTemplate";
import Nav from "./components/nav";
import Footer from "./components/footer";
import API from "./utils/API";
import './App.css';


class App extends Component {

  logout = () => {
    API.logout()
    .then(res => {
      console.log(res.data);
      this.props.history.push("/signIn");
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div>
          <Nav callback={this.logout} />
            <Switch>
              {<Route exact path='/' component={home} />}
              {<Route exact path='/register' component={register} />}
              {<Route exact path='/addchore' component={addChore} />}
              {<Route exact path='/createPool' component={createPool} />}
              {<Route exact path='/poolManager' component={poolManager} />}
              {<Route exact path='/poolMember' component={poolMember} />}
              {<Route exact path='/signIn' component={signIn} />}
              {<Route exact path='/poolTemplate' component={poolTemplate} />}
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
