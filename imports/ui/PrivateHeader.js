import React, { Component } from 'react';

export default class PrivateHeader extends Component {
    onLogout(e){
        e.preventDefault();

        Meteor.logout((err) => {
            console.log("Logout Callback", err)
        });
    }
    render(){
        return(
            <div>
                <h1>Your Dashboard</h1>
                <button className="btn btn-primary" onClick={this.onLogout.bind(this)}>Log Out</button>
            </div>
        )
    }
}