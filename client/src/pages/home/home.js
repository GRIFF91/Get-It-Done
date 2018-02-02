import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";


class home extends Component {
    render() {
        return (  
            <Container fluid>
                <div className="jumbotron">
                    <h1 className="display-3">Chore Pool</h1>
                        <p className="lead">The Fun Way to Complete Family Tasks</p>
                    <hr className="my-4" />
                        <p>Something. Something. Something. Something.</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="/register" role="button">Register</a>
                        </p>
                </div>
            </Container>
                
           
        );
    }
}

export default home;