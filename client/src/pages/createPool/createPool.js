import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";

class createPool extends Component {
    render() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="AddAPoolHere">Add A Pool</label>
                        <input type="addPool" class="form-control" id="AddAPool" placeholder="Add a Pool by name here" />
                    </div>
                        <label for="Describe the Pool">Pool Description</label>
                        <textarea class="form-control" rows="3" placeholder="Describe the Pool here"></textarea>
                        <button type="submit" class="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }
}

export default createPool;