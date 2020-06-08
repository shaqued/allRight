import IntllectualProperty from './routes/intellectual-property';
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './routes/Home';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path={'/signUp'} component={SignUp} />
                <Route path={'/signIn'} component={SignIn} />
                <Route path={'/ip/:id'} component={IntllectualProperty} />
                <Redirect to={'/'} />
            </Switch>
        </BrowserRouter >
    );
}