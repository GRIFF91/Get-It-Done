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
    .then(res => this.login(res.data.email, this.state.password))
    // .then(() => {
    //   API.login(this.state.email, this.state.password)
    //   .then(res => {
    //     const url = res.request.responseURL;
    //     if (url.endsWith('/success')) {
    //       console.log('You are now logged in! 🤠');
    //       this.props.history.push('/poolManager')
    //     } else {
    //       console.log('Either Email or Password is incorrect');
    //     }
    //   })
    //   .catch(err => console.log(err));
    // })
    .then(() => console.log('Registration sent'))
    // .then(() => this.props.history.push('/poolManager'))
    .catch(err => console.log(err));
  }

  login = (email, password) => {
    API.login(email, password)
    .then(res => {
      const url = res.request.responseURL;
      if (url.endsWith('/success')) {
        console.log('You are now logged in! 🤠');
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

  handleFormSubmit = event => { 
    event.preventDefault();
    this.registerPoolManager(this.state.name, this.state.email, this.state.password, this.state.passwordConfirm);
    // this.login(this.state.email, this.state.password);
    // this.setState({
    //   name: '',
    //   email: '',
    //   password: '',
    //   passwordConfirm: ''
    // });
  }

    render() {
        return (  
            <Container fluid>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                          name="name"
                          type="username"
                          className="form-control"
                          id="ExampleUser1"
                          value={this.state.name}
                          onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input 
                          name="email"
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="example@email.com"
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
                          value={this.state.password}
                          onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordConfirm">Confirm Password</label>
                        <input
                          name="passwordConfirm"
                          type="password"
                          className="form-control"
                          id="confirmExampleInputPassword1"
                          value={this.state.passwordConfirm}
                          onChange={this.handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </Container>
        );
    }
}

export default register;