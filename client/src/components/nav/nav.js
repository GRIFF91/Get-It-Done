import React, { Component } from "react";
import "./nav.css";
import { Link } from 'react-router-dom';
import API from '../../utils/API';

class Nav extends Component {

  state = {
    user: {}
  }

  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('did mount');
    this.userData();
    // console.log(window.location.href)
  }

  userData = () => {
    API.userData()
    .then(res => this.setState({ user: res.data }, () => {
      console.log('user be: ', this.state.user)
    }))
    .catch (err => console.log(err));
  }

  logout = () => {
    API.logout()
    .then(res => {
      console.log(this.state.user)
      console.log(this.props.history)
      this.props.history.push('/')
    })
    .then(() => console.log('You are now logged out'))
    .catch(err => console.log(err));
    this.setState({ user: {} });
    console.log(this.state.user);
  }

  render() {
    console.log('render');
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">ChorePool</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signIn">Sign In</Link>
            </li>
            <li className="nav-item">
              {this.state.user.name && (
                <span className="nav-link text-white">
                  &nbsp; Hello {this.state.user.name}!
                </span>
              )}
            </li>
          </ul>
          {this.state.user.name && (
            <div>
              <Link className="nav-link  text-white d-inline" to="/poolManager">
                Dashboard
              </Link>
              <button className="btn btn-outline-light border-0" onClick={this.logout}>
                <i className="fas fa-sign-out-alt text-white fa-lg d-inline"></i>
              </button>
            </div>
          )}
        </div>
      </nav>
    )
  }
}

export default Nav;