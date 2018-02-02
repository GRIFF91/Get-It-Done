import React, { Component } from "react";
import { Link } from "react-router-dom";

class register extends Component {
    render() {
        return (  
            <div>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">User Name</label>
                            <input type="username" class="form-control" id="ExampleUser1" placeholder="User Name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                    </form>
            </div>
        );
    }
}

export default register;