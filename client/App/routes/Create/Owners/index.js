import React from 'react';
import { Box, makeStyles, TextField, IconButton, Select, MenuItem } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import _ from 'lodash'

export default ({ owners, setOwners, users }) => {
    const classes = useStyles();

    const handleAddOwner = () => {
        const keys = Object.keys(owners);
        const nextIndex = parseInt(_.last(keys)) + 1;

        setOwners(x => ({ ...x, [nextIndex]: { user: '', percentageOfOwnership: '' } }))
    };

    const handleChange = (index, { target: { name, value } }) => {
        const exist = owners[index];
        exist[name] = value;

        setOwners(x => ({ ...x, [index]: exist }));
    }

    const handleChangeNumber = (index, { target: { name, value } }) => {
        const number = parseInt(value)
        if (!number) return;

        const exist = owners[index];
        exist[name] = number;

        setOwners(x => ({ ...x, [index]: exist }));
    }

    const handleDelete = (index) => {
        const { [index]: toDelete, ...rest } = owners;
        setOwners(rest);
    }

    return (
        <Box className={classes.container}>
            <IconButton onClick={handleAddOwner} className={classes.icon}>
                <AddCircleOutlineIcon />
            </IconButton>
            {Object.keys(owners).map((x) =>
                <Box key={x} display='flex' alignItems='center'>
                    <Select
                        name='user'
                        className={classes.text}
                        placeholder={'שם משתמש'}
                        value={owners[x].user}
                        // input={TextField}
                        onChange={(e) => handleChange(x, e)}>
                        {users.map(x => <MenuItem key={x.id} value={x.id}>{x.name}</MenuItem>)}
                    </Select>
                    <TextField
                        name='percentageOfOwnership'
                        className={classes.text}
                        placeholder={'אחוז בעלות'}
                        value={owners[x].percentageOfOwnership}
                        type={'number'}
                        inputProps={{ style: { padding: 5 } }}
                        onChange={(e) => handleChangeNumber(x, e)} />
                    <IconButton onClick={() => handleDelete(x)}>
                        <DeleteIcon fontSize={'small'} />
                    </IconButton>
                </Box>
            )}
        </Box>
    )
}

const useStyles = makeStyles({
    container: {
        width: '320px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        marginBottom: '15px'
    },
    text: {
        paddingLeft: '7px',
        paddingBottom: '7px',
        width: '120px'
    },
    icon: {
        alignSelf: 'flex-start'
    }
})