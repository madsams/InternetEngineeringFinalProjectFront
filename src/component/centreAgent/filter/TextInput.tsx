import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getAreas, setFilter} from '../actions';
import {StringsJson} from '../../../utils/types';
import {TextFilter} from '../types';
import renderToast, {ToastTypes} from '../../../utils/effects/renderToast';
import {IconButton, InputAdornment, TextField} from '@material-ui/core';
import {useLanguage} from '../../../utils/hooks';
import SendIcon from '@material-ui/icons/Send';

interface TextInputProps {
    filter: TextFilter | undefined;
    name: string;
}

const strings: StringsJson = {
    placeholder: {
        en: 'Contains',
        fa: 'شامل',
    },
    errorMessage: {
        en: 'Text exists',
        fa: 'این را قبلا وارد کرده‌اید',
    },
    errorTitle: {
        en: '',
        fa: '',
    },
};

const TextInput = ({filter, name}: TextInputProps) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>('');
    const placeholder = useLanguage(strings.placeholder);

    useEffect(() => {
        dispatch(getAreas());
    }, [dispatch]);

    const addFilter = () => {
        if (value.length > 0) {
            if (!filter) {
                dispatch(setFilter(name, [value]));
            } else if (!filter.find((f) => f === value)) {
                dispatch(setFilter(name, [...filter, value]));
            } else {
                dispatch(
                    renderToast(
                        strings.errorTitle,
                        strings.errorMessage,
                        ToastTypes.ERROR,
                    ),
                );
            }
            setValue('');
        }
    };

    const handleChange = (event: React.ChangeEvent<{value: unknown}>) =>
        setValue(event.target.value as string);
    return (
        <TextField
            label={placeholder}
            className="flex-1 m-1"
            value={value}
            onChange={handleChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={addFilter}>
                            <SendIcon fontSize="small" />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};
export default TextInput;
