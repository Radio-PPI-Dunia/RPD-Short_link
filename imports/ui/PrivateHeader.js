import React from "react";
import {Meteor} from "meteor/meteor";

export default class PrivateHeader extends React.Component {
    onLogout(e) {
        e.preventDefault();
        Meteor.logout();
    }

    render() {
        return (
            <div className="header">
                <div className="header__content">
                    <h1>{this.props.title}</h1>
                    <button className="btn btn-default" onClick={this.onLogout.bind(this)}>Log Out</button>
                </div>
            </div>
        )
    }
}
