import React from 'react';
import {IInputProps} from './types';
import {Location} from '../../../../utils/types';

interface InputLocationProps extends IInputProps {
    value: Location | null;
}

const InputLocation = ({value}: InputLocationProps) => <></>;
export default InputLocation;
