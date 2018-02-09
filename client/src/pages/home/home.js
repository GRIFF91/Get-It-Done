import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import API from '../../utils/API';
import "./home.css";


class home extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
    this.userData();
  }

  userData = () => {
    API.userData()
    .then(res => this.setState({ user: res.data }))
    .then(() => console.log(this.state.user))
    .catch (err => console.log(err));
  }

    render() {
      return (
        <Container fluid>
        <br />
          <div className="jumbotron">
            <h1 className="display-3">Chore Pool</h1>
            <p className="lead">The Fun Way to Complete Family Tasks</p>
            <p>Is getting your family to do the chores one of the biggest household chores it’s self? Are your kids giving you the stink eye when you tell them to do the dishes? do they play dumb when you ask why the living room is still a mess?</p>
            <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/register" role="button">Register</Link>
            </p>
          </div>
        </Container>
        );
    }
}

export default home;