import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import './poolTemplate.css';

class poolTemplate extends Component {
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
                                    <h4 className="card-title">Reward: Go to the Movies</h4>
                                    <h5>Progress: </h5>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-striped progress-bar-animated " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <br />
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk content.
                                    Some quick example text to build on the card title and make up the bulk content. Some quick example text 
                                    to build on the card title and make up the bulk content. Some quick example text to build on the card title 
                                    and make up the bulk content.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
            </Container>
            </div>
        );
    }
}

export default poolTemplate;