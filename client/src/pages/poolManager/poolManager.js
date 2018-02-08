import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import "./poolManager.css";

class poolManager extends Component {
    render() {
        return (  
            <div>  
            <Container fluid>
                <br />
                    <Row>
                        <Col size="md-12">
                            <div className="card text-white bg-primary mb-3">
                                <div className="card-header">Pool Name</div>
                                <div className="card-body">
                                    <h4 className="card-title">Clean the Kitchen</h4>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
            </Container>
        </div>
        );
    }
}

export default poolManager;