import React, { useState, useEffect } from 'react'
import Navbar from '../../Shell/Navbar/Light'
import SearchPanel from './SearchPanel'
import { makeStyles, Box, Typography, IconButton } from '@material-ui/core';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

export default () => {
    const classes = useStyles();
    const { query: initQuery } = useParams();

    const [ips, setIps] = useState([]);
    const [searchDisplay, setSearchDisplay] = useState(initQuery);
    const [query, setQuery] = useState({
        name: initQuery,
        type: '',
        category: '',
        performer: initQuery
    });

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        try {
            const { data } = await axios.get('/api/ip',
                {
                    params: {
                        ...query
                    }
                }
            );

            setIps(data);
            console.log(data)
            setSearchDisplay(() => (query.name && query.performer) ? `${query.name}` : `${query.name}${query.performer}`);
        } catch (e) {
            console.log(e);
            setIps([]);
        }
    };

    const ResultsTable = () => {
        return (
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right" />
                            <TableCell align="right">{'שם היצירה'}</TableCell>
                            <TableCell align="right">{'שם היוצר'}</TableCell>
                            <TableCell align="right">{'אלבום'}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ips.map((ip) => (
                            <TableRow key={ip._id}>
                                <TableCell align="center">
                                    <IconButton>
                                        <PlayCircleFilledIcon className={classes.icon} />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right">{ip.name}</TableCell>
                                <TableCell align="right">{ip.performer}</TableCell>
                                <TableCell align="right">{"פופ"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

    return (
        <Box className={classes.container}>
            <Navbar />
            <SearchPanel onSearch={fetch} setQuery={setQuery} value={initQuery} />
            <Typography variant='h5' className={classes.title}>
                {searchDisplay && `${ips.length} תוצאות עבור "${searchDisplay}"`}
            </Typography>
            {ips.length &&
                <Box className={classes.centered}>
                    <ResultsTable />
                </Box>}
        </Box>
    )
}

const useStyles = makeStyles({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        padding: '20px',
        paddingRight: '40px',
        fontWeight: '700'
    },
    centered: {
        display: 'flex',
        width: '900px',
        flexDirection: 'column',
        alignSelf: 'center'
    },
    icon: {
        color: 'black'
    }
});