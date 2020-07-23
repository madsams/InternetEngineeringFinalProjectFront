import {NumberFilter} from '../types';
import React from 'react';
import {FilterInputProps} from './index';

interface NumbersProps extends FilterInputProps {
    filter: NumberFilter | undefined;
}

const NumberShow = ({filter}: NumbersProps) => (
    <div dir="ltr">{filter && `${filter.from} - ${filter.to}`}</div>
);
export default NumberShow;
