import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Signup extends Component {
    constructor(props){
        super(props);

        this.state = {
            error: '',
        };
    }

    onSubmit(e){
        e.preventDefault();

        this.setState({
            error: 'Oops! Something went error'
        })
    }

    render(){
        return(
            <div className="container">
                <h1>Sign Up</h1>

                { this.state.error ? <div className="alert alert-danger" role="alert">{this.state.error}</div> : undefined}

                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Fullname:</label>
                        <input type="text" name="name" placeholder="Fullname" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" placeholder="Email" className="form-control"/>
                    </div>

                   <div className="form-group">
                       <label>Password:</label>
                       <input type="password" name="password" placeholder="Email" className="form-control"/>
                   </div>
                    <button className="btn btn-primary">Create Account</button>
                </form>
                <hr/>
                <Link to="/">Have already Account?</Link>
            </div>
        )
    }
}

export default withRouter(Signup);