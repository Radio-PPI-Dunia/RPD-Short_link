import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends Component {
    render(){
        return(
            <div className="container">
                <h1>Login</h1>
                <p>Login Here</p>
                <Link to="/signup">Sign Up</Link>
            </div>
        )
    }
}

export default withRouter(Login);