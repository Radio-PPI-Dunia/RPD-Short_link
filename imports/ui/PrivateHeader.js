import React  from 'react';
import { Meteor } from 'meteor/meteor';

export default class PrivateHeader extends React.Component {
    onLogout(e){
        e.preventDefault();
        Meteor.logout();
    }
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <button className="btn btn-primary" onClick={this.onLogout.bind(this)}>Log Out</button>
            </div>
        )
    }
}
