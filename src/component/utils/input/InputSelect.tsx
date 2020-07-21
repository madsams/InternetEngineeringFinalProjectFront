import React from 'react';
import {IInputProps} from './types';
import {Option} from '../../../utils/types';
import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';

interface InputSelectProps extends IInputProps {
    value: Option | null;
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
    disabled,
}: InputSelectProps) => {
    const handleChange = (event: React.ChangeEvent<{value: unknown}>) => {
        const selectedValue = event.target.value;
        const selectedOption = options.find((o) => o.value === selectedValue);
        return onChange(selectedOption || null);
    };
    return (
        <FormControl disabled={disabled}>
            <InputLabel id={name + 'label'}>{title}</InputLabel>
            <Select
                required={required}
                labelId={name + 'label'}
                id={name}
                value={value ? value.label : undefined}
                renderValue={
                    disabled ? (v) => <div>{v as string}</div> : undefined
                }
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
