import React from 'react';
import IError from './IError';
import {LangBaseJson} from '../../../../utils/types';
import {IInputProps} from './types';
import IInput from './IInput';

export interface IFormInputProps extends IInputProps {
    error: LangBaseJson | null;
    touched: boolean;
}

const FormInput = ({error, touched, ...props}: IFormInputProps) => (
    <>
        <IInput {...props} />
        <IError error={error} touched={touched} />
    </>
);

export default FormInput;
