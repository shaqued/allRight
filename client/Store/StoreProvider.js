import {Store} from './Store';
import React, {createContext} from 'react';

export const StoreContext = createContext();

export const StoreProvider = ({children}) => {
    return (
        <StoreContext.Provider value={new Store()}>
            {children}
        </StoreContext.Provider>
    );
};