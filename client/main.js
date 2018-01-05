import {Meteor} from "meteor/meteor";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Route, Switch, withRouter, Router} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import {Tracker} from "meteor/tracker";

// Import all UI Component
import Signup from "../imports/ui/Signup";
import Link from "../imports/ui/Link";
import Login from "../imports/ui/Login";
import NoMatch from "../imports/ui/Notfound";

const history = createBrowserHistory();

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
let isUnauthenticatedPage = true;
let isAuthenticatedPage = false;

const ChangeTracker = withRouter(({match, location, history}) => {
    const pathName = location.pathname;
    isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
    isAuthenticatedPage = authenticatedPages.includes(pathName);

    return false;
});

const routes = (
    <Router history={history}>
        <div>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/links" component={Link}/>
                <Route path="*" component={NoMatch}/>
            </Switch>
            <ChangeTracker/>
        </div>
    </Router>
);

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    if (isAuthenticated) {
        if (isUnauthenticatedPage) {
            history.replace('/links');
        }
    } else {
        if (isAuthenticatedPage) {
            history.replace('/');
        }
    }
});

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.app'))
});