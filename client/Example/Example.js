import {StoreContext} from '../Store/StoreProvider';
import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import {observer} from 'mobx-react';

export default observer(() => {
    const store = useContext(StoreContext);
    const onChange = e => {
        store.changeObservable(e.target.value);
    };

    return (
      <div>
        <TextField onChange={onChange} />
        <p>store value: {store.example}</p>
      </div>);
});