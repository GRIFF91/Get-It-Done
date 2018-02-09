import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import API from '../../utils/API';
import Select from 'react-select';
import { Creatable } from 'react-select';
import 'react-select/dist/react-select.css';

class createPool extends Component {

  state = {
    name: '',
    description: '',
    choreOptions: [],
    selectOption: [],
    chores: [],
    reward: ''
  }

  componentDidMount() {
    API.getChores()
    .then(options => this.setState({ choreOptions: options.data }))
    .then( () => this.createOptions())
    .catch(err => console.log(err));
  }

  createOptions = () => {
    let opts = [];
    this.state.choreOptions.map( chore => {
      let opt = {
        value: chore.name,
        label: chore.name
      }
      opts.push(opt);
      // opts[this.state.choreOptions.indexOf(chore)].value = chore.name;
      // opts[this.state.choreOptions.indexOf(chore)].label = chore.name;
    })
    this.setState({ selectOptions: opts });
  }

  createPool = () => {
    const { name, description, reward } = this.state;
    const choresList = [];
    this.state.chores.map(chore => {
      choresList.push(chore.label);
    })
    API.createPool(name, description, choresList, reward)
    .then(res => {
      console.log('Pool Created')
      this.setState({ name: '', description: '', chores: [], reward: '' });
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

    handleSelectChange = value => {
      // const newChores = this.state.chores.concat(value.label);
      this.setState({ chores: value });
    }

  handleSubmit = event => {
    event.preventDefault();
    this.createPool();
    console.log(this.state);
  }

<<<<<<< HEAD
  render() {
    const { chores } = this.state;
    // const value = selectedOption && selectedOption.value;
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
            <br />
            <Select
              name="chores"
              // value={this.state.chores}
              onChange={this.handleSelectChange}
              // multi={true}
              options={this.state.selectOptions}
              placeholder="Add Chores To Your Pool ..."
              multi
              joinValues
              value={chores}
            />
            {/* <select  multiple name="chores" onChange={this.handleSelectChange}>
              <option value="Choose" disabled >Choose Existing Chores: &nbsp;</option>
              {this.state.choreOptions.map(chore => 
                <option key={chore._id} value={chore.name}>{chore.name}</option>
              )}
            </select> */}
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
=======
    render() {
        return (
            <Container fluid>
              <div className="card text-white bg-primary mb-3">
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
                          <option key={chore._id} value={chore.name}>{chore.name}</option>
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
                          className="btn btn-primary"
                          onClick={this.handleSubmit}
                        > Submit </button>

                </form>
              </div>
            </Container>
        );
    }
>>>>>>> 9404b0b52925113da838fbc70f2a01388088a5d5
}

export default createPool;