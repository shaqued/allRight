import IntllectualProperty from './routes/intellectual-property';
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
import React from 'react';
import { BrowserRouter, Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './routes/Home';
import Search from './routes/Search';
import history from '../history'

export default () => {
    return (
        <BrowserRouter>
            <Router history={history}>
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route exact path={'/search/:query'} component={Search} />
                    <Route exact path={'/search/'} component={Search} />
                    <Route path={'/signUp'} component={SignUp} />
                    <Route path={'/signIn'} component={SignIn} />
                    <Route exact path={'/ip/:id'} component={IntllectualProperty} />
                    <Redirect to={'/'} />
                </Switch>
            </Router >
        </BrowserRouter>
    );
}