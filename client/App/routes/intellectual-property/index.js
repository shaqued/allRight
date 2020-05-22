import React from 'react';
import FlexView from 'react-flexview';
import SuggestedSongs from './components/suggested-songs';
import IpDescription from './components/ip-description';
import LicensesPlan from './components/licenses-plan';
import { Box, Grid } from '@material-ui/core';

export default class IntllectualProperty extends React.Component {
    render() {
        return (
            <Grid container direction='column'>
                <IpDescription />
                <LicensesPlan />
                <SuggestedSongs />
            </Grid>
        );
    }
}