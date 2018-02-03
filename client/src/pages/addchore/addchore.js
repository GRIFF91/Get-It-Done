import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";

class addChore extends Component {
    render() {
        return (  
            <Container fluid>
                <form>
                    <div className="form-group">
                        <label for="name">Add A Chore</label>
                        <input type="addChore" className="form-control" id="AddAChore" placeholder="Add a chore by name here" name="name" />
                    </div>
                        <label for="description">Chore Description</label>
                        <textarea className="form-control" rows="3" placeholder="Describe the chore here" name="description"></textarea>
                        <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </Container>
        );
    }
}

export default addChore;