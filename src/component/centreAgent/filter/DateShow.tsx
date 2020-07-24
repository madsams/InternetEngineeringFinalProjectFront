import {DateFilter} from '../types';
import React from 'react';
import {FilterInputProps} from './index';
import {StringCreatorsJson} from '../../../utils/types';
import {useFormat, useLanguage} from '../../../utils/hooks';

interface DateShowProps extends FilterInputProps {
    filter: DateFilter | undefined;
}

const stringCreators: StringCreatorsJson<
    string,
    {from: string; to: string} | undefined
> = {
    text: (filter) => ({
        en: filter ? `${filter.from}   to   ${filter.to}` : '',
        fa: filter ? `${filter.from} الی ${filter.to}` : '',
    }),
};
const DateShow = ({filter}: DateShowProps) => {
    const formatMoment = useFormat();
    const text = useLanguage(
        filter
            ? stringCreators.text({
                  from: formatMoment(filter.from),
                  to: formatMoment(filter.to),
              })
            : undefined,
    );
    return <div>{filter && text}</div>;
};
export default DateShow;
