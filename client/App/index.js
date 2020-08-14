import IntllectualProperty from './routes/intellectual-property';
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
import Account from './routes/Account'
import React from 'react';
import { BrowserRouter, Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './routes/Home';
import Search from './routes/Search';
import history from '../history';
import Create from "./routes/Create";
import IpEdit from './routes/IpEdit';

export default () => {
    return (
        <BrowserRouter>
            <Router history={history}>
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route path={'/account'} component={Account} />
                    <Route exact path={'/search/:query'} component={Search} />
                    <Route exact path={'/search/'} component={Search} />
                    <Route exact path={'/ip/create'} component={Create} />
                    <Route exact path={'/ip/edit/:id'} component={Create} />
                    <Route path={'/signUp'} component={SignUp} />
                    <Route path={'/signIn'} component={SignIn} />
                    <Route exact path={'/ip/:id'} component={IntllectualProperty} />
                    <Route exact path={'/ip/:id/edit'} component={IpEdit} />
                    <Redirect to={'/'} />
                </Switch>
            </Router >
        </BrowserRouter>
    );
}