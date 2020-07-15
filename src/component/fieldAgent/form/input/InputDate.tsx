import React from 'react';
import {IInputProps} from './types';

interface InputDateProps extends IInputProps {
    value: Date | null;

    onChange(value: Date | null): void;
}

const dateFormat = 'yyyy/MM/dd';

const InputDate = ({onChange, value}: InputDateProps) => <></>;
export default InputDate;
