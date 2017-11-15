import React, { Component } from 'react';

export default class Link extends Component {
    onLogout(e){
        e.preventDefault();

        this.props.history.push('/');
    }

    render(){
        return(
            <div className="container">
                <h1>Your Dashboard</h1>
                <button className="btn btn-primary" onClick={this.onLogout.bind(this)}>Log Out</button>
            </div>
        )
    }
}