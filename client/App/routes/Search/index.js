import React, { useState, useEffect } from 'react'
import Navbar from '../../Shell/Navbar'
import SearchPanel from './SearchPanel'
import { makeStyles, Box, Typography, IconButton, Button } from '@material-ui/core';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import history from '../../../history'
import categories from '../../../assets/constants/categories'

export default () => {
    const classes = useStyles();
    const { query: initQuery } = useParams();

    const [ips, setIps] = useState([]);
    const [playedSample, setPlayedSample] = useState({ id: '', audio: null });
    const [searchDisplay, setSearchDisplay] = useState(initQuery);
    const [query, setQuery] = useState({
        name: initQuery || '',
        tag: '',
        category: '',
        performer: initQuery || ''
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
            setSearchDisplay(() => (query.name && query.performer) ? `${query.name}` : `${query.name}${query.performer}`);
        } catch (e) {
            console.log(e);
            setIps([]);
        }
    };

    const playSample = (id, sample) => {
        playedSample.audio && playedSample.audio.pause();

        const audio = new Audio(sample);
        setPlayedSample({ id, audio });

        audio.play();
    }

    const pauseSample = () => {
        playedSample.audio.pause();
        setPlayedSample({ id: '', audio: null });
    }

    const goToIp = (id) => {
        playedSample.audio && playedSample.audio.pause();
        history.push(`/ip/${id}`);
    }

    const LinkedTableCell = ({ value, id }) => (
        <TableCell align="right" onClick={() => goToIp(id)}>{value}</TableCell>
    );

    const Sample = ({ id, sample }) => {
        if (playedSample.id === id) {
            return (
                <IconButton onClick={pauseSample}>
                    <PauseCircleFilledIcon className={classes.icon} />
                </IconButton>);
        }

        return (
            <IconButton onClick={() => playSample(id, sample)}>
                <PlayCircleFilledIcon className={classes.icon} />
            </IconButton>
        );
    }

    const ResultsTable = () => {
        return (
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right" />
                            <TableCell align="right">{'שם היצירה'}</TableCell>
                            <TableCell align="right">{'שם האמן'}</TableCell>
                            <TableCell align="right">{'קטגוריה'}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ips.map((ip) => (
                            <TableRow key={ip._id} style={{ cursor: 'pointer' }}>
                                <TableCell id={ip._id} align="center">
                                    <Sample id={ip._id} sample={ip.sample} />
                                </TableCell>
                                <LinkedTableCell id={ip._id} value={ip.name} />
                                <LinkedTableCell id={ip._id} value={ip.performer} />
                                <LinkedTableCell id={ip._id} value={categories[ip.category]} />
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