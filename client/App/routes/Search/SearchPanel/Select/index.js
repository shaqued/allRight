import React from 'react'
import { Select, MenuItem } from '@material-ui/core';

export default ({ placeholder, value, menuItems, onSelect, className }) => {
    return (
        <Select
            onChange={onSelect}
            defaultValue={''}
            className={className}
            value={value}
            displayEmpty>
            {placeholder &&
                <MenuItem value=''>
                    {placeholder}
                </MenuItem>}
            {Object.keys(menuItems).map(x => (
                <MenuItem value={x} key={x}>{menuItems[x]}</MenuItem>
            ))}
        </Select>
    );
};