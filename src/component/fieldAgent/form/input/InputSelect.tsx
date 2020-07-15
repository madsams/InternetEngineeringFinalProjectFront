import React from 'react';
import {IInputProps} from './types';
import {Option} from '../../../../utils/types';
import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';

interface InputSelectProps extends IInputProps {
    options: Array<Option>;
}

const InputSelect = ({
    name,
    title,
    value,
    required,
    onChange,
    onBlur,
    options,
}: InputSelectProps) => {
    const handleChange = (event: React.ChangeEvent<{value: unknown}>) =>
        onChange(event.target.value as string);

    return (
        <FormControl>
            <InputLabel id={name + 'label'}>{title}</InputLabel>
            <Select
                required={required}
                labelId={name + 'label'}
                id={name}
                value={value}
                onBlur={onBlur}
                onChange={handleChange}>
                {options.map((option) => (
                    <MenuItem
                        key={option.value}
                        value={option.value}
                        button={false}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
export default InputSelect;
