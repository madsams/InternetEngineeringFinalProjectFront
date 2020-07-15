import React from 'react';
import {IInputProps} from './types';

interface InputTextProps extends IInputProps {
    isNumber?: boolean;
    value: string | number;

    onChange(value: string | number | null): void;
}

const InputText = ({isNumber, value, onChange}: InputTextProps) => <></>;
export default InputText;
