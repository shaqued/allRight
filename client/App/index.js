import SignIn from './routes/SignIn';
import IntllectualProperty from './routes/intellectual-property';
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './routes/Home';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path={'/signIn'} component={SignIn} />
                <Route path={'/ipPage/:id'} component={IntllectualProperty} />
                <Redirect to={'/'} />
            </Switch>
        </BrowserRouter >
    );
}