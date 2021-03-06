import React, { useState } from 'react'
import { Box, Typography, makeStyles, Input, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import clsx from 'clsx';

const ENTER_KEY_CODE = 13;

export default ({ className, arrow, onSearch, onInput, value }) => {
    const classes = useStyles();
    const [input, setInput] = useState(value);

    const handleChange = ({ target: { value } }) => setInput(value);

    const handleEnter = e => {
        if (e.keyCode && e.keyCode !== ENTER_KEY_CODE) return;

        onSearch(input);
    };

    return (
        <Box className={clsx(className, classes.container)}>
            <SearchIcon className={classes.icon} />
            <Input placeholder={'שיר או אמן...'}
                onKeyDown={handleEnter}
                className={classes.input}
                onInput={onInput}
                onChange={handleChange}
                value={input}
                disableUnderline />
            {arrow &&
                <IconButton onClick={() => onSearch(input)}>
                    <ArrowRightAltIcon className={clsx(classes.icon, classes.flippped)} />
                </IconButton>}
        </Box>
    )
}

const useStyles = makeStyles({
    container: {
        height: '40px',
        width: '400px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 10px'
    },
    flippped: {
        '-webkit-transform': 'scaleX(-1)',
        transform: 'scaleX(-1)',
    },
    icon: {
        color: 'black'
    },
    input: {
        display: 'flex',
        flexGrow: 2,
        paddingRight: '5px'
    }
});