import React from 'react';
import {TextField} from '@material-ui/core';
import {LangBaseJson, StringsJson} from '../../../utils/types';
import {NumberFilter} from '../types';
import {useLanguage} from '../../../utils/hooks';
import {useDispatch} from 'react-redux';
import {setFilter} from '../actions';

interface NumberInputProps {
    filter: NumberFilter | undefined;
    name: string;
}

const strings: StringsJson = {
    from: {
        en: 'from',
        fa: 'از',
    },
    to: {
        en: 'to',
        fa: 'به',
    },
};

const NumberInput = ({filter, name}: NumberInputProps) => {
    const dispatch = useDispatch();
    const {from, to} = filter || {
        from: undefined,
        to: undefined,
    };

    const handleChange = (newTo: number, newFrom: number) => {
        if (newTo >= 0 && newFrom >= 0) {
            dispatch(
                setFilter(name, {
                    from: newFrom,
                    to: newTo,
                }),
            );
        } else {
            dispatch(
                setFilter(name, {
                    from: 0,
                    to: 1,
                }),
            );
        }
    };

    const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFrom = parseInt(e.target.value);
        const newTo = to && to > newFrom ? to : newFrom + 1;
        handleChange(newTo, newFrom);
    };

    const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTo = parseInt(e.target.value);
        const newFrom = from && from < newTo ? from : newTo - 1;
        handleChange(newTo, newFrom);
    };
    return (
        <>
            <NumberSubInput
                value={from}
                label={strings.from}
                onChange={handleFromChange}
            />
            <NumberSubInput
                value={to}
                label={strings.to}
                onChange={handleToChange}
            />
        </>
    );
};
export default NumberInput;

interface NumberSubInputProps {
    value: number | undefined;
    label: LangBaseJson;

    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const NumberSubInput = ({value, label, onChange}: NumberSubInputProps) => {
    const iLabel = useLanguage(label);

    return (
        <TextField
            className="flex-1 m-1"
            label={iLabel}
            value={value}
            InputLabelProps={{shrink: value !== undefined}}
            type={'number'}
            onChange={onChange}
        />
    );
};
