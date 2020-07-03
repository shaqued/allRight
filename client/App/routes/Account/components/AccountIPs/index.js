import { Typography, Grid } from '@material-ui/core';
import IPCard from './components/IPCard';

export default function (props) {
    const ips = [1, 2];

    return (
        <Typography variant="h3">היצירות שלי</Typography>
        // {ips.map(ip =>
        //     <Grid item sm={12} key={ip}>
        //         <IPCard />
        //     </Grid>
        // )}
    );
}