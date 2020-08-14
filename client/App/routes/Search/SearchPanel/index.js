import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/SearchBar'
import { makeStyles, Box, Typography, Link } from '@material-ui/core';
import useToggle from '../../../../hooks/use-toggle'
import categories from '../../../../assets/constants/categories'
import tags from '../../../../assets/constants/tags'
import Select from './Select'

export default ({ onSearch, setQuery, value }) => {
    const classes = useStyles();
    const [tag, setTag] = useState('');
    const [category, setCategory] = useState('');
    const { Toggle, isRightSelected: isByName } = useToggle();

    useEffect(() => {
        handleToggleChange();
    }, [isByName]);

    const handleCategoryChange = ({ target: { value } }) => {
        setCategory(value)
        setQuery(x => ({ ...x, category: value }));
    };

    const handleTagChange = ({ target: { value } }) => {
        setTag(value);
        setQuery(x => ({ ...x, tag: value }));
    };

    const clearQuery = () => {
        setTag('');
        setCategory('');
        setQuery(x => ({ ...x, category: '', tag: '' }));
    };

    const handleInputChange = ({ target: { value } }) => setQuery(x => isByName ? ({ ...x, name: value, performer: '' }) : ({ ...x, performer: value, name: '' }))
    const handleToggleChange = () => setQuery(x => isByName ? ({ ...x, name: x.performer, performer: '' }) : ({ ...x, performer: x.name, name: '' }))

    return (
        <Box className={classes.container}>
            <SearchBar className={classes.search} onInput={handleInputChange} onSearch={onSearch} value={value} />
            <Box width='750px' display='flex' justifyContent='space-between'>
                <Box>
                    <Typography className={classes.toggle}>{'מה מחפשים?'}</Typography>
                    <Toggle right={'יצירה'} left={'אמן'} />
                </Box>
                <Box>
                    <Typography>{"ז'אנר"}</Typography>
                    <Select
                        placeholder={"כל הז'אנרים"}
                        menuItems={categories}
                        onSelect={handleCategoryChange}
                        className={classes.select}
                        value={category} />
                </Box>
                <Box>
                    <Typography>{"תגית"}</Typography>
                    <Select
                        placeholder={"כל התגיות"}
                        menuItems={tags}
                        onSelect={handleTagChange}
                        className={classes.select}
                        value={tag} />
                </Box>
                <Link variant={'body1'} color={'textPrimary'} className={classes.text} component={'button'} onClick={clearQuery} gutterBottom>
                    {'ניקוי סינונים'}
                </Link>
            </Box>
        </Box >
    )
};

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgb(224,224,224)',
        padding: '20px 0px'
    },
    centered: {
        display: 'flex',
        width: '1000px',
    },
    search: {
        width: '750px',
        marginBottom: '30px',
    },
    select: {
        width: '150px',
        backgroundColor: 'white',
        marginTop: '10px'
    },
    text: {
        paddingTop: '25px',
    },
    toggle: {
        marginBottom: '10px'
    }
});