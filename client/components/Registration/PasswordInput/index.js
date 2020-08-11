import React, { useState } from 'react';
import { InputAdornment, IconButton } from '@material-ui/core';
import { Visibility as VisibilityIcon, VisibilityOff as VisibilityOffIcon,} from '@material-ui/icons';
import TextField from 'components/TextField';

export default function(props) {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((showPassword) => !showPassword);
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return <TextField
        {...props}
        type={showPassword ? 'text' : 'password'}
        // show/hide password icon
        InputProps={{
            endAdornment: 
                <InputAdornment position="end">
                    <IconButton
                        size="small"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                </InputAdornment>
        }}
    />   
}