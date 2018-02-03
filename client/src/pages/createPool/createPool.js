import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";

class createPool extends Component {
    render() {
        return (
            <Container fluid>
                <form>
                    <div className="form-group">
                        <label for="name">Add A Pool</label>
                        <input type="text" className="form-control" id="addAPool" placeholder="Add a Pool by name here" name="name" />
                    </div>
                    <div className="form-group">
                        <label for="description">Pool Description</label>
                        <textarea className="form-control" rows="3" placeholder="Describe the Pool here" name="description"></textarea>
                    </div>
                    <div classNamne="form-group">
                        <label for="reward">Reward</label>
                        <input type="text" className="form-control" id="addReward" placeholder="Add a reward here" name="reward" />
                    </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                    </form>
                </Container>
        );
    }
}

export default createPool;