import React from 'react';
import {IInputProps} from './types';
import {FieldTypes, Location} from '../../../../utils/types';
import InputSelect from './InputSelect';
import InputDate from './InputDate';
import InputLocation from './InputLocation';
import InputText from './InputText';

const IInput = ({...props}: IInputProps) => {
    if (props.options)
        return <InputSelect {...props} options={props.options} />;

    switch (props.type) {
        case FieldTypes.Date:
            return <InputDate {...props} value={props.value as Date | null} />;
        case FieldTypes.Location:
            return (
                <InputLocation
                    {...props}
                    value={props.value as Location | null}
                />
            );
        case FieldTypes.Text:
            return (
                <InputText {...props} value={props.value as string | number} />
            );
        case FieldTypes.Number:
            return (
                <InputText
                    {...props}
                    value={props.value as string | number}
                    isNumber
                />
            );
        default:
            return null;
    }
};

export default IInput;
