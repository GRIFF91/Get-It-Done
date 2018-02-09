import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
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

  componentWillMount() {
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
                        <Col size="md-8">
                          <h4 className="card-title float-left">{pool.name}</h4>
                        </Col>
                        <Col size="md-4">
                          <Link
                            type="button"
                            className="btn btn-default btn-outline btn-primary float-right"
                            to={`/pool/${pool._id}`}
                          > Choose
                          </Link>
                          <br />
                          <br />
                        </Col>
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