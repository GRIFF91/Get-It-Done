import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";

class signIn extends Component {
    render() {
        return (
            
            <Container fluid>

                <h2>Sign In</h2>

                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">User Name</label>
                        <input type="username" className="form-control" id="ExampleUser1" placeholder="User Name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                        <br />
                    <h3>Reset Password</h3>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </Container>
        );
    }
}

export default signIn;