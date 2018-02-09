import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import API from '../../utils/API';
import "./poolTemplate.css";

class poolTemplate extends Component {

  state = {
    pool: {}
  }

  componentWillMount() {
    API.getPool(this.props.match.params.id)
    .then(res => this.setState({ pool: res.data }))
    .catch(err => console.log(err));
  }

    render() {
      console.log(this.state);
        return (
            <div>
            <Container fluid>
            <br />
                <Row>
                    <Col size="md-8">
                        <div className="card text-white bg-primary mb-3">
                            <div className="card-header">Pool</div>
                            <div className="card-body">
                                <h4 className="card-title">{this.state.pool.name}</h4>
                                <p className="card-text">{this.state.pool.description}</p>
                                {this.state.pool.chores && 
                                  this.state.pool.chores.map(chore => (
                                    <div>
                                      <input
                                        type="checkbox"
                                        className="form-check form-check-inline"
                                      />
                                      <label className="form-check-label">{chore}</label>
                                    </div>
                                  ))
                                }
                            </div>
                        </div>
                    </Col>

                    <Col size="md-4">
                            <div className="card text-white bg-primary mb-3">
                                <div className="card-header">Fill  the Pool</div>
                                <div className="card-body">
                                    <h4 className="card-title">Reward: {this.state.pool.reward}</h4>
                                    <h5>Progress: </h5>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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