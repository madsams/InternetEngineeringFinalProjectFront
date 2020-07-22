import React from 'react';
import {IInputProps} from './types';
import {Option, Value} from '../../../utils/types';
import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';

interface InputSelectProps extends IInputProps {
    value: any | null;
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
    const handleChange = (event: React.ChangeEvent<{value: unknown}>) =>
        onChange((JSON.parse(event.target.value as string) as Value) || null);
    const getValue = (value: any | null): string | undefined => {
        const selectedOption = options.find((o) => {
            if (typeof value === 'number' || typeof value === 'string') {
                return o.value === value;
            } else if (value && value.lat) {
                // @ts-ignore
                return o.value.lat === value.lat && o.value.long === value.long;
            } else {
                return false;
            }
        });
        return selectedOption ? selectedOption.label : undefined;
    };
    return (
        <FormControl disabled={disabled}>
            <InputLabel id={name + 'label'}>{title}</InputLabel>
            <Select
                required={required}
                labelId={name + 'label'}
                id={name}
                value={getValue(value)}
                renderValue={
                    disabled ? (v) => <div>{v as string}</div> : undefined
                }
                onBlur={onBlur}
                onChange={handleChange}>
                {options.map((option, index) => (
                    <MenuItem
                        key={'o' + index}
                        value={JSON.stringify(option.value)}
                        button={false}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
export default InputSelect;
