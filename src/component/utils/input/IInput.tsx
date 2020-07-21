import React from 'react';
import {IInputProps} from './types';
import {FieldTypes, Location, Option} from '../../../utils/types';
import InputSelect from './InputSelect';
import InputDate from './InputDate';
import InputLocation from './InputLocation';
import InputText from './InputText';

const IInput = ({value, ...props}: IInputProps) => {
    if (props.options)
        return (
            <InputSelect
                {...props}
                options={props.options}
                value={value as Option}
            />
        );

    switch (props.type) {
        case FieldTypes.Date:
            return <InputDate {...props} value={value as Date | null} />;
        case FieldTypes.Location:
            return (
                <InputLocation {...props} value={value as Location | null} />
            );
        case FieldTypes.Text:
            return <InputText {...props} value={value as string | number} />;
        case FieldTypes.Number:
            return (
                <InputText
                    {...props}
                    value={value as string | number}
                    isNumber
                />
            );
        default:
            return null;
    }
};

export default IInput;
