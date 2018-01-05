import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import {Links} from '../api/links';

export default class Link extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        if (!Meteor.userId()){
            this.props.history.replace('/');
        }
    }

    onLogout(e){
        e.preventDefault();

        Meteor.logout((err) => {
            console.log("Logout Callback", err)
        });
    }

    onSubmit(e){

        const url = this.refs.url.value.trim();

        e.preventDefault();

        if (url) {
            Links.insert({ url });
            this.refs.url.value = '';
        }
    }

    render(){
        return(
            <div className="container">
                <h1>Your Dashboard</h1>
                <button className="btn btn-primary" onClick={this.onLogout.bind(this)}>Log Out</button>

                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Add Link</label>
                        <input type="text" ref="url" placeholder="Add URL" className="form-control"/>
                    </div>
                    <button className="btn btn-primary">Add Link</button>
                </form>
            </div>
        )
    }
}