import React, { useState, useEffect } from "react";
import TextField from '../../../components/TextField'
import { MenuItem, FormControl, Typography, FormGroup, FormControlLabel, FormHelperText, Checkbox, Select, Input, Button, Box, makeStyles, IconButton } from "@material-ui/core";
import categories from '../../../assets/constants/categories'
import tagsList from '../../../assets/constants/tags'
import Axios from "axios";
import Navbar from '../../Shell/Navbar/Light'
import Owners from "./Owners";
import Price from "./Price";
import EditIcon from '@material-ui/icons/Edit';
import { useParams } from "react-router-dom";
import history from "../../../history";

const emptyPrice = {
    rangeMin: '',
    rangeMax: '',
    mediaType: '',
    usageType: '',
    price: ''
};

export default () => {
    const classes = useStyles();
    const { id } = useParams();

    const [fields, setFields] = useState({})
    const [users, setUsers] = useState([])
    const [owners, setOwners] = useState({ 0: { user: '', percentageOfOwnership: '' } });
    const [privateRangePrice, setPrivateRangePrice] = useState({ 0: { ...emptyPrice } });
    const [businessRangePrice, setBusinessRangePrice] = useState({ 0: { ...emptyPrice } });
    const [socialRangePrice, setSocialRangePrice] = useState({ 0: { ...emptyPrice } });
    const [openDialogs, setOpenDialogs] = useState({ private: false, business: false, social: false })
    const [tags, setTags] = useState({
        love: false,
        wedding: false,
        happy: false,
        sad: false,
        family: false
    })

    useEffect(() => {
        initialize();
    }, [])

    const initialize = async () => {
        if (id) {
            await initializeIp();
        }

        initializeUsers();
    }

    const initializeIp = async () => {
        const res = await fetch(`/api/ip/${id}`);
        res
            .json()
            .then(res => {
                const { name, _id, category, tag, composer, performer, writer, dateOfCreation, about, sample, owners, price } = res;
                const { privateRangePrice, businessRangePrice, socialRangePrice } = price;

                setFields({ name, _id, category, tag, composer, performer, writer, dateOfCreation, about, sample });
                setOwners(owners);
                tag.map(tag => setTags(x => ({ ...x, [tag]: true })));
                setPrivateRangePrice(privateRangePrice);
                setBusinessRangePrice(businessRangePrice);
                setSocialRangePrice(socialRangePrice);

            })
            .catch(err => console.log(err));
    }

    const initializeUsers = async () => {
        const { data } = await Axios.get('/api/users');

        if (!data) return;

        setUsers(data.map(x => ({ name: `${x.name.first} ${x.name.last}`, id: x._id })));
    }

    const error = Object.values(tags).filter((x) => x).length > 3;

    const handleCloseDialog = (name) => setOpenDialogs(x => ({ ...x, [name]: false }))
    const handleOpenDialog = (name) => setOpenDialogs(x => ({ ...x, [name]: true }));

    const handleChange = ({ target: { name, value } }) => {
        setFields((fields) => ({ ...fields, [name]: value }));
    }

    const handleDateChange = ({ target: { value } }) => {
        setFields((fields) => ({ ...fields, dateOfCreation: new Date(value) }));
    };

    const handleImageChange = ({ target: { files } }) => {
        setFields((fields) => ({ ...fields, image: files[0] }));
    };

    const handleTagChange = ({ target: { name } }) => {
        setTags(x => ({ ...x, [name]: !x[name] }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const ipOwners = Object.values(owners).filter(x => x.user);
        const ipTags = Object.keys(tags);
        const ipPrice = {
            privateRangePrice: Object.values(privateRangePrice),
            businessRangePrice: Object.values(businessRangePrice),
            socialRangePrice: Object.values(socialRangePrice)
        }

        const fieldsData = {
            ...fields,
            tag: JSON.stringify(ipTags),
            owners: JSON.stringify(ipOwners),
            price: JSON.stringify(ipPrice),
            type: 'music'
        };

        const data = new FormData();
        Object.keys(fieldsData).map(x => data.append(x, fieldsData[x]));

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        try {
            const response = await Axios.post('/api/ip', data, config)

            if (response && response.status === 201) {
                alert('השינויים נשמרו בהצלחה!');
                history.push('/')
            }
        }
        catch (e) {
            alert('מצטערים, לא הצלחנו להוסיף את השיר. אנא נסו במועד מאוחר יותר');
            console.log(e)
        }
    }

    return (
        <Box className={classes.container}>
            <Navbar />
            <Box className={classes.centered}>
                <Box className={classes.form}>
                    <TextField
                        name="name"
                        label="שם היצירה"
                        value={fields.name}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        autoFocus
                    />
                    <TextField
                        name="category"
                        variant="outlined"
                        value={fields.category}
                        onChange={handleChange}
                        label="קטגוריה"
                        select
                        required>
                        {Object.keys(categories).map(x =>
                            <MenuItem value={x} key={x}>{categories[x]}</MenuItem>
                        )}
                    </TextField>
                    <FormControl error={error} component="fieldset">
                        <Typography display="inline" variant="body1">{"תגיות"}</Typography>
                        <FormGroup>
                            {Object.keys(tagsList).map(tag =>
                                <FormControlLabel key={tag} value={tag} label={tagsList[tag]}
                                    control={<Checkbox checked={tags[tag]} onChange={handleTagChange} name={tag} />} />
                            )}
                        </FormGroup>
                        <FormHelperText>{'ניתן לבחור עד שלוש תגיות'}</FormHelperText>
                    </FormControl>
                    <TextField
                        name="composer"
                        label="מלחין"
                        value={fields.composer}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        autoFocus
                    />
                    <TextField
                        name="performer"
                        label="מבצע"
                        value={fields.performer}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        autoFocus
                    />
                    <TextField
                        name="writer"
                        label="כתב"
                        value={fields.writer}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        autoFocus
                    />
                    <TextField
                        name="dateOfCreation"
                        variant="outlined"
                        type="date"
                        label="תאריך יצירה"
                        onChange={handleDateChange}
                    />
                    <TextField
                        name="about"
                        variant="outlined"
                        value={fields.about}
                        multiline
                        rows={5}
                        label="פרטים"
                        onChange={handleChange}
                    />
                    <TextField
                        name="sample"
                        variant="outlined"
                        value={fields.sample}
                        label="קישור לשיר"
                        type='url'
                        onChange={handleChange}
                    />
                    <TextField
                        name="image"
                        variant="outlined"
                        label="תמונה"
                        type='file'
                        onChange={handleImageChange}
                    />
                    <Box>
                        <Typography>{'בעלים'}</Typography>
                        <Owners owners={owners} setOwners={setOwners} users={users} />
                    </Box>
                    <Box display='flex' alignItems='center'>
                        <IconButton onClick={() => handleOpenDialog('private')}>
                            <EditIcon />
                        </IconButton>
                        <Typography>{'תמחור רישיון לשימוש פרטי'}</Typography>
                        <Price
                            open={openDialogs['private']}
                            priceRange={privateRangePrice}
                            setPriceRange={setPrivateRangePrice}
                            onClose={() => handleCloseDialog('private')} />
                    </Box>
                    <Box display='flex' alignItems='center'>
                        <IconButton onClick={() => handleOpenDialog('social')}>
                            <EditIcon />
                        </IconButton>
                        <Typography>{'תמחור רישיון לשימוש חברתי'}</Typography>
                        <Price
                            open={openDialogs['social']}
                            priceRange={socialRangePrice}
                            setPriceRange={setSocialRangePrice}
                            onClose={() => handleCloseDialog('social')} />
                    </Box>
                    <Box display='flex' alignItems='center'>
                        <IconButton onClick={() => handleOpenDialog('business')}>
                            <EditIcon />
                        </IconButton>
                        <Typography>{'תמחור רישיון לשימוש עסקי'}</Typography>
                        <Price
                            open={openDialogs['business']}
                            priceRange={businessRangePrice}
                            setPriceRange={setBusinessRangePrice}
                            onClose={() => handleCloseDialog('business')} />
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}>
                        {id ? 'עריכת שיר' : 'הוספת שיר'}
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

const useStyles = makeStyles({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    centered: {
        display: 'flex',
        alignItems: 'center',
        overflow: 'auto',
        flexFlow: 'column wrap',
        padding: '20px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '1000px',
        flexWrap: 'wrap',
        overflow: 'auto'
    },
})