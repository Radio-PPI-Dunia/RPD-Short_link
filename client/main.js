import {Meteor} from "meteor/meteor";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Route, Switch, Router} from "react-router-dom";
import createHistory from "history/createBrowserHistory";

// Import all UI Component
import Signup from "../imports/ui/Signup";
import Link from "../imports/ui/Link";
import Login from "../imports/ui/Login";
import NoMatch from "../imports/ui/Notfound";

const browserHistory = createHistory();

const routes = (
    <Router history={browserHistory}>
        <div>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/links" component={Link}/>
                <Route path="*" component={NoMatch}/>
            </Switch>
        </div>
    </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.app'))
});