import React from 'react';
import {IInputProps} from './types';
import 'date-fns';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

interface InputDateProps extends IInputProps {
    value: Date | null;

    onChange(value: Date | null): void;
}

const dateFormat = 'yyyy/MM/dd';

const InputDate = ({
    name,
    required,
    title,
    value,
    onChange,
    onBlur,
}: InputDateProps) => {
    const handleDateChange = (date: Date | null) => {
        onChange(date);
    };
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
                required={required}
                clearable={true}
                disableToolbar
                variant="inline"
                format={dateFormat}
                id={name}
                label={title}
                value={value || null}
                onBlur={onBlur}
                autoOk
                invalidDateMessage={`Date Format is ${dateFormat}`}
                minDate={new Date('0000-00-00')}
                onChange={handleDateChange}
            />
        </MuiPickersUtilsProvider>
    );
};
export default InputDate;
