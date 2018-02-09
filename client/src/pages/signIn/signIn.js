import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import "./signIn.css";
import { Col, Row, Container } from "../../components/grid";
import API from "../../utils/API";


class signIn extends Component {

  state = {
    email: '',
    password: '',
    resetEmail: ''
  }


  login = (email, password) => {
    API.login(email, password)
    .then(res => {
      const url = res.request.responseURL;
      if (url.endsWith('/success')) {
        console.log('You are now logged in! 🤠');
        this.forceUpdate();
        this.props.history.push('/poolManager')
      } else {
        console.log('Either Email or Password is incorrect');
      }
    })
    .catch(err => console.log(err));
  }

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  // When the form is submitted, prevent the default event 
  handleFormSubmit = event => { 
    event.preventDefault();
    this.login(this.state.email, this.state.password);
    this.setState({ email: '', password: '' });
  }

  handleResetSubmit = event => {
    event.preventDefault();
    this.setState({ resetEmail: '' });
  }

    render() {
        return (
            
            <Container fluid>
              
              <br />

              <div className="card text-white bg-primary mb-3">
                <h2>Sign In</h2>

                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          id="ExampleUser1"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          name="password"
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.handleFormSubmit}
                      > Log In →
                      </button>
                    </div>
                        <br />
                    <h3>Reset Password</h3>
                    <div className="form-group">
                        <label htmlFor="resetEmail">Email</label>
                        <input
                          name="resetEmail"
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="example@email.com"
                          value={this.state.resetEmail}
                          onChange={this.handleInputChange}/>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={this.handleResetSubmit}
                      > Reset →
                      </button>

                </form>
              </div>
            </Container>
        );
    }
}

export default signIn;