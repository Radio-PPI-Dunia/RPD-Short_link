import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Signup extends Component {
    render(){
        return(
            <div className="container">
                <h1>Sign Up</h1>
                <p>Sign Up here</p>
                <Link to="/">Have already Account?</Link>
            </div>
        )
    }
}

export default withRouter(Signup);