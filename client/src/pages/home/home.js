import React, { Component } from "react";
import { Link } from "react-router-dom";


class home extends Component {
    render() {
        return (  
            <div>
            <div className="jumbotron">
                    <h1>Welcome to Chore Pool</h1>
                        <p>The Fun Way To Complete Family Tasks</p>
                        <p><a className="btn btn-primary btn-lg" href="/register" role="button">Register</a></p>
                </div>
            </div>
        );
    }
}

export default home;