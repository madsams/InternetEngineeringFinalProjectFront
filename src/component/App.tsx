import React from 'react';
import {useDispatch} from 'react-redux';
import {TextField} from '@material-ui/core';
import DoubleDirectionProvider from './DoubleDirectionProvider';
import {changeLanguage} from '../utils/actions/languagesAction';

function App() {
    const dispatch = useDispatch();

    return (
        <DoubleDirectionProvider>
            <div className="p-4">
                <div onClick={() => dispatch(changeLanguage('fa'))}>fa</div>
                <div onClick={() => dispatch(changeLanguage('en'))}>en</div>
                <TextField
                    id="standard-basic"
                    label="Standard"
                    placeholder="koft"
                />
            </div>
        </DoubleDirectionProvider>
    );
}

export default App;
