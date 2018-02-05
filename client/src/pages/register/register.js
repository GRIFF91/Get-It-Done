import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import API from '../../utils/API';

class register extends Component {
  
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }

  registerPoolManager = (name, email, password, passwordConfirm) => {
    API.registerPoolManager(name, email, password, passwordConfirm)
    .then(res => console.log('Registration sent'))
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

  handleFormSubmit = event => { 
    event.preventDefault();
    this.registerPoolManager(this.state.name, this.state.email, this.state.password, this.state.passwordConfirm);
    this.setState({
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    });
  }

    render() {
        return (  
            <Container fluid>
                <form>
                    <div className="form-group">
                        <label for="name">User Name</label>
                        <input
                          name="name"
                          type="username"
                          className="form-control"
                          id="ExampleUser1"
                          placeholder="User Name"
                          onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input 
                          name="email"
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Email"
                          onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input
                          name="password"
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="passwordConfirm">Confirm Password</label>
                        <input
                          name="passwordConfirm"
                          type="password"
                          className="form-control"
                          id="confirmExampleInputPassword1"
                          placeholder="Confirm Password"
                          onChange={this.handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </Container>
        );
    }
}

export default register;