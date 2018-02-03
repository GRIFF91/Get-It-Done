import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";

class addChore extends Component {
    render() {
        return (  
            <Container fluid>
                <form>
                    <div class="form-group">
                        <label for="AddAChoreHere">Add A Chore</label>
                        <input type="addChore" class="form-control" id="AddAChore" placeholder="Add a chore by name here" name="name" />
                    </div>
                        <label for="Describe the Chore">Chore Description</label>
                        <textarea class="form-control" rows="3" placeholder="Describe the chore here" name="description"></textarea>
                        <button type="submit" class="btn btn-default">Submit</button>
                </form>
            </Container>
        );
    }
}

export default addChore;