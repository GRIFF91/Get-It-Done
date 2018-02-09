import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import API from '../../utils/API';

class poolManager extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
    API.userData()
    .then(res => {
      this.setState({
        user: res.data
      });
      console.log(this.state);
    })
    .catch(err => console.log(err));
  }

    render() {
        return (  
            <div>
                <h1>Pool Manager Page</h1>
            </div>
        );
    }
}

export default poolManager;