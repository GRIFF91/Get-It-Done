import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import API from '../../utils/API';

class createPool extends Component {

  state = {
    name: '',
    description: '',
    choreOptions: [],
    chores: [],
    reward: ''
  }

  componentDidMount() {
    API.getChores()
    .then(options => this.setState({ choreOptions: options.data }))
    .catch(err => console.log(err));
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
      const { name, value, chores } = event.target;
  
      // Set the state for the appropriate input field
      this.setState({
        [name]: value
      });
      console.log(this.state)
      console.log(name)
      console.log('value ', value)
      console.log(chores);
    }

  handleSubmit = event => {
    event.preventDefault();
    // this.createPool();
    console.log(this.state);
  }

    render() {
        return (
            <Container fluid>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Add A Pool:</label>
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
                        <label htmlFor="description">Pool Description:</label>
                        <textarea
                          name="description"
                          className="form-control"
                          rows="3"
                          value={this.state.description}
                          onChange={this.handleInputChange}
                        > </textarea>
                    </div>
                    <div className="form-gropu">
                      <label htmlFor="chores"><u>Add Chores:</u></label>
                      <br />
                      <p className="sub-label">
                        Note: <em>Hold down cntrl or command to choose multiple options</em>
                      </p>
                      <br />
                      <select  name="chores" onChange={this.handleInputchange}>
                        <option value="Choose" disabled >Choose Existing Chores: &nbsp;</option>
                        {this.state.choreOptions.map(chore => 
                          <option value={chore.name}>{chore.name}</option>
                        )}
                      </select>
                      <br />
                      <br />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reward">Reward:</label>
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