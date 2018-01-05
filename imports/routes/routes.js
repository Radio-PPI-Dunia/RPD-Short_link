import React, {Component} from "react";
import {Route, Switch, withRouter, Router} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import Signup from "../ui/Signup";
import Link from "../ui/Link";
import Login from "../ui/Login";
import NoMatch from "../ui/Notfound";

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

export const onAuthChange = (isAuthenticated) => {
    if (isAuthenticated) {
        if (isUnauthenticatedPage) {
            history.replace('/links');
        }
    } else {
        if (isAuthenticatedPage) {
            history.replace('/');
        }
    }
};

export const routes = (
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