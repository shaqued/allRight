import React, { useState } from 'react'
import { Button, makeStyles } from '@material-ui/core'

export default () => {
    const classes = useStyles();
    const [selected, setSelected] = useState(false)

    const handleSelect = (e) => {
        setSelected(x => !x);
    };

    const Toggle = ({ right, left }) => (
        <>
            <Button className={classes.button} value={left} disabled={selected} onClick={handleSelect}>
                {left}
            </Button>
            <Button className={classes.button} value={right} disabled={!selected} onClick={handleSelect}>
                {right}
            </Button>
        </>
    );

    return { Toggle, isRightSelected: !selected, }
}

const useStyles = makeStyles({
    button: {
        backgroundColor: 'white',
        borderRadius: 0,
        '&:disabled': {
            backgroundColor: 'rgb(234,176,193)',
            color: '#424242'
        }
    },
})