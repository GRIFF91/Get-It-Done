import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import API from '../../utils/API';
import "./home.css";
import Nav from '../../components/nav/nav';


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
        <div>
          <Nav />
            <Container fluid>
                <br />
                    <div className="jumbotron">
                        <h1 className="display-3">Chore Pool</h1>
                        <div className="jumboText">
                            <p className="lead">The Fun Way to Complete Family Tasks</p>
                            <p>Is getting your family to do the chores one of the biggest household chores it's self? Are your kids giving you the stink eye when you tell them to do the dishes? do they play dumb when you ask why the living room is still a mess?</p>
                        </div>
                            <p className="lead">
                                <a className="btn btn-primary btn-lg" href="/register" role="button">Register</a>
                            </p>
                    </div>
            </Container>
        </div>
      );
    }
}

export default home;