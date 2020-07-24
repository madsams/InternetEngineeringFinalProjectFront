import React from 'react';
import {FieldTypes, LangBaseJson, StringsJson} from '../../../utils/types';
import {DateFilter} from '../types';
import {useLanguage} from '../../../utils/hooks';
import {useDispatch} from 'react-redux';
import {setFilter} from '../actions';
import InputDate from '../../utils/input/InputDate';

interface DateInputProps {
    filter: DateFilter | undefined;
    name: string;
}

const strings: StringsJson = {
    from: {
        en: 'from',
        fa: 'از',
    },
    to: {
        en: 'to',
        fa: 'به',
    },
};

const DateInput = ({filter, name}: DateInputProps) => {
    const dispatch = useDispatch();
    const {from, to} = filter || {
        from: undefined,
        to: undefined,
    };

    const handleChange = (newTo: Date, newFrom: Date) => {
        dispatch(
            setFilter(name, {
                from: new Date(newFrom),
                to: new Date(newTo),
            }),
        );
    };

    const handleFromChange = (value: string) => {
        const newFrom = new Date(value);
        const newTo = to || new Date(newFrom.getTime() + 24 * 60 * 60 * 1000);

        handleChange(newTo, newFrom);
    };

    const handleToChange = (value: string) => {
        const newTo = new Date(value);
        const newFrom = from || new Date(newTo.getTime() + 24 * 60 * 60 * 1000);

        handleChange(newTo, newFrom);
    };
    return (
        <>
            <DateSubInput
                value={from ? from.toString() : undefined}
                label={strings.from}
                onChange={handleFromChange}
                name="from"
                maxDate={to}
            />
            <DateSubInput
                value={to ? to.toString() : undefined}
                label={strings.to}
                onChange={handleToChange}
                name="to"
                minDate={from}
            />
        </>
    );
};
export default DateInput;

interface DateSubInputProps {
    value: string | undefined;
    label: LangBaseJson;
    name: 'to' | 'from';
    minDate?: Date;
    maxDate?: Date;

    onChange(value: string | null): void;
}

const DateSubInput = ({
    value,
    label,
    maxDate,
    minDate,
    onChange,
    name,
}: DateSubInputProps) => {
    const iLabel = useLanguage(label) as string;

    return (
        <InputDate
            className="m-1"
            value={value || null}
            onChange={onChange}
            onBlur={() => {}}
            name={name}
            title={iLabel}
            type={FieldTypes.Date}
            maxDate={maxDate}
            minDate={minDate}
        />
    );
};
