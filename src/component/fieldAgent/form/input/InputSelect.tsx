import React from 'react';
import {IInputProps} from './types';
import {Option} from '../../../../utils/types';

interface InputSelectProps extends IInputProps {
    options: Array<Option>;
}

const InputSelect = ({options}: InputSelectProps) => <></>;
export default InputSelect;
