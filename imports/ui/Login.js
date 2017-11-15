import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            error: '',
        }
    }

    onLogIn(e){
        e.preventDefault();

        this.setState({
            error: 'Oops! Something went error'
        });

        this.props.history.push('/links')
    }

    render(){
        return(
            <div className="container">
                <h1>Login</h1>
                { this.state.error ? <div className="alert alert-danger" role="alert">{this.state.error}</div> : undefined}
                <form>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <button className="btn btn-primary" onClick={this.onLogIn.bind(this)}>Log In</button>
                </form>
                <hr/>
                Don't have an account? <Link to="/signup">Sign Up</Link> now!
            </div>
        )
    }
}

export default withRouter(Login);