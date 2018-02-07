import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import API from '../../utils/API';

class createPool extends Component {

  state = {
    name: '',
    description: '',
    reward: ''
  }

  createPool = () => {
    const { name, description, reward } = this.state;
    API.createPool(name, description, reward)
    .then(res => {
      console.log('Pool Created')
      this.setState({ name: '', description: '', reward: '' });
    })
    .catch(err => console.log(err));
  }

    // handle any changes to the input fields
    handleInputChange = event => {
      // Pull the name and value properties off of the event.target (the element which triggered the event)
      const { name, value } = event.target;
  
      // Set the state for the appropriate input field
      this.setState({
        [name]: value
      });
    }

  handleSubmit = event => {
    event.preventDefault();
    this.createPool();
  }

    render() {
        return (
            <Container fluid>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Add A Pool</label>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="addAPool"
                          value={this.state.name}
                          onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Pool Description</label>
                        <textarea
                          name="description"
                          className="form-control"
                          rows="3"
                          value={this.state.description}
                          onChange={this.handleInputChange}
                        >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="reward">Reward</label>
                        <input
                          name="reward"
                          type="text"
                          className="form-control"
                          id="addReward"
                          value={this.state.reward}
                          onChange={this.handleInputChange}
                        />
                    </div>
                        <button
                          type="submit"
                          className="btn btn-default"
                          onClick={this.handleSubmit}
                        > Submit </button>
                </form>
            </Container>
        );
    }
}

export default createPool;