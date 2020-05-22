import React from 'react';
import { Grid, makeStyles, Typography, GridList, GridListTile, GridListTileBar} from '@material-ui/core';
import useStyles from './suggested-songs.css';
import Mergui from '../../../../../assets/photos/Mergui.png';

export default () => {
    const classes = useStyles();

    return (
        <Grid container style={{ height: '30%' }}>
            <Grid xs={12} item>
                <Typography variant="h2">
                    עוד שירים שאולי תאהבו
                </Typography>
            </Grid>
            <GridList xs={12} className={classes.gridList} cols={7}>
                {suggestions.map((tile) => (
                    <GridListTile key={tile.img} className={classes.tile}>
                        <img src={Mergui} alt={tile.title} />
                        <GridListTileBar title="אסור/ מרגי" />
                    </GridListTile>
                ))}
            </GridList>
        </Grid>
    );
}

const suggestions = [
    '1', '2', '3', '4', '5', '6', '7'
];