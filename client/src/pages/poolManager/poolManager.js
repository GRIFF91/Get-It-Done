import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import poolTemplate from '../poolTemplate/poolTemplate';
import API from '../../utils/API';
import "./poolManager.css";


class poolManager extends Component {

  // constructor() {
  //   super();
  // }

  state = {
    user: {},
    pools: []
  }

  componentDidMount() {
    API.userData()
    .then(res => {
      this.setState({ user: res.data });
      console.log(this.state.user);
    })
    .catch(err => console.log(err));

    API.getPools()
    .then(res => {
      this.setState({ pools: res.data });
      console.log(this.state.pools);
    })
    .catch(err => console.log(err));
  }

  deletePool = (event) => {
    API.deletePool(event.target.id)
    .then(res => this.setState({ pools: res.data }))
    .then(() => console.log('Pool deleted!'))
    .catch(err => console.log)
  }

  render() {
    return (  
      <div>  
        <Container fluid>
          <br />
          <Row>
            <Col size="md-12">
              <div className="card text-white bg-primary mb-3">
                <div className="card-header">
                  <h3 className="float-left">Pools</h3>
                  <Link
                    type="button"
                    className="btn btn-default btn-outline btn-primary float-right"
                    to="/createPool"
                  > Create New Pool
                  </Link>
                </div>
                <div className="card-body">
                  {this.state.pools.map(pool => (
                    <div key={pool._id}>
                      <Container>
                        <Row>
                          <Col size="sm-6">
                            <h4 className="card-title float-left">{pool.name}</h4>
                          </Col>
                          <Col size="sm-2">
                            <Link
                              type="button"
                              className="btn btn-default btn-outline btn-primary float-right"
                              to={`/pool/${pool._id}`}
                            > Choose
                            </Link>
                          </Col>
                          <Col size="sm-2">
                            <button
                              type="button"
                              className="btn btn-danger"
                              id={pool._id}
                              onClick={this.deletePool} > X
                            {/* <i className="far fa-times-circle text-danger fa-2x"></i> */}
                            </button>
                            <br />
                            <br />
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  ))}
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