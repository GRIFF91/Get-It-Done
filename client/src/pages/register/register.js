import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";

class register extends Component {
    render() {
        return (  
            <Container fluid>
                <form>
                    <div className="form-group">
                        <label for="name">User Name</label>
                        <input type="username" className="form-control" id="ExampleUser1" placeholder="User Name" name="name" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" name="email"/>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password"/>
                    </div>
                    <div className="form-group">
                        <label for="password-confirm">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmExampleInputPassword1" placeholder="Confirm Password" name="password-confirm"/>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </Container>
        );
    }
}

export default register;