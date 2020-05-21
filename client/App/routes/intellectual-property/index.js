import React from 'react';
import FlexView from 'react-flexview';
import SuggestedSongs from './components/suggested-songs';
import IpDescription from './components/ip-description';
import LicensesPlan from './components/licenses-plan';
import { Box, Grid } from '@material-ui/core';

export default class IntllectualProperty extends React.Component {
    render() {
        return (
            <Grid container style={{height: '100%'}}
            alignItems='stretch' direction='column'>
                <Grid container style={{height: '40%'}} pb={2}>
                    <IpDescription />
                </Grid>
                <Grid style={{backgroundColor: 'aliceBlue', height: '30%'}} container>
                    <LicensesPlan />
                </Grid>
                <Grid style={{backgroundColor: 'aliceBlue', height: '30%'}} container>
                    <SuggestedSongs />
                </Grid>
            </Grid>
        );
    }
}