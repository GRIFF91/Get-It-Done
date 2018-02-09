import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import './poolMember.css';

class poolMember extends Component {
    render() {
        return (
        <div>  
            <Container fluid>
                <br />
                    <Row>
                        <Col size="md-8">
                            <div className="card text-white bg-primary mb-3">
                                <div className="card-header">Task</div>
                                <div className="card-body">
                                    <h4 className="card-title">Clean the Kitchen</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk content.</p>
                                </div>
                            </div>
                        </Col>

                        <Col size="md-4">
                            <div className="card text-white bg-primary mb-3">
                                <div className="card-header">Fill  the Pool</div>
                                <div className="card-body">
                                    <h4 className="card-title">Reward:</h4>
                                    <h5>Go to the Movies</h5>
                                    <p className="card-text">75/100%</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
            </Container>
        </div>
        );
    }
}

export default poolMember;