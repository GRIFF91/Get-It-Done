import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import API from '../../utils/API';

class addChore extends Component {

  state = {
    name: '',
    description: ''
  }

  addChore = () => {
    const { name, description } = this.state;
    API.addChore(name, description)
    .then(res => {
      console.log('Chore Added')
      this.setState({ name: '', description: '' })
    })
    .catch( err => console.log(err) );
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.addChore();
  }

    render() {
        return (  
            <Container fluid>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Add A Chore</label>
                        <input
                          name="name"
                          type="addChore"
                          className="form-control"
                          id="AddAChore"
                          value={this.state.name}
                          onChange={this.handleInputChange}
                        />
                    </div>

                        <label htmlFor="description">Chore Description</label>
                        <textarea
                          name="description"
                          className="form-control"
                          rows="3"
                          value={this.state.description}
                          onChange={this.handleInputChange}
                        > </textarea>
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

export default addChore;