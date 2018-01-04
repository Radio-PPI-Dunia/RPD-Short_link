import {Meteor} from "meteor/meteor";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import {Tracker} from 'meteor/tracker';

// Import all UI Component
import Signup from "../imports/ui/Signup";
import Link from "../imports/ui/Link";
import Login from "../imports/ui/Login";
import NoMatch from "../imports/ui/Notfound";

const routes = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/links" component={Link}/>
                <Route path="*" component={NoMatch}/>
            </Switch>
        </div>
    </BrowserRouter>
);

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    console.log("isAuthenticated", isAuthenticated);
});

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.app'))
});