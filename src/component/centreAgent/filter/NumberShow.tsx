import {NumberFilter} from '../types';
import React from 'react';
import {FilterInputProps} from './index';
import {StringCreatorsJson} from '../../../utils/types';
import {useLanguage} from '../../../utils/hooks';

interface NumbersProps extends FilterInputProps {
    filter: NumberFilter | undefined;
}

const stringCreators: StringCreatorsJson<string, NumberFilter | undefined> = {
    text: (filter) => ({
        en: filter ? `${filter.from}   to   ${filter.to}` : '',
        fa: filter ? `${filter.from} الی ${filter.to}` : '',
    }),
};
const NumberShow = ({filter}: NumbersProps) => {
    const text = useLanguage(stringCreators.text(filter));
    return <div>{filter && text}</div>;
};
export default NumberShow;
