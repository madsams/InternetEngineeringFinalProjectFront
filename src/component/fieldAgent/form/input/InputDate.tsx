import React from 'react';
import {IInputProps} from './types';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import JalaliUtils from '@date-io/jalaali';
import MomentUtils from '@date-io/moment';
import moment, {Moment} from 'moment';
import jMoment from 'moment-jalaali';
import {LangBaseJson} from '../../../../utils/types';
import {useLanguage} from '../../../../utils/hooks';
import TodayIcon from '@material-ui/icons/Today';

interface InputDateProps extends IInputProps {
    value: Date | null;

    onChange(value: Date | null): void;
}

jMoment.loadPersian({dialect: 'persian-modern', usePersianDigits: true});
moment.locale('en');

const momentFormatsLBJ: LangBaseJson<string> = {
    fa: 'jYYYY/jMM/jDD',
    en: 'YYYY-MM-DD',
};

const utilsLBJ: LangBaseJson<any> = {
    fa: JalaliUtils,
    en: MomentUtils,
};

const localesLBJ: LangBaseJson<string> = {
    fa: 'fa',
    en: 'en',
};

const libInstanceLBJ: LangBaseJson<any> = {
    fa: jMoment,
    en: moment,
};

const InputDate = ({
    name,
    required,
    title,
    value,
    onChange,
    onBlur,
    disabled,
}: InputDateProps) => {
    const momentFormat = useLanguage(momentFormatsLBJ);
    const util = useLanguage(utilsLBJ);
    const locale = useLanguage(localesLBJ);
    const libInstance = useLanguage(libInstanceLBJ);

    const handleDateChange = (date: Moment | null) => {
        const iDate = date ? date.toDate() : null;
        onChange(iDate);
    };
    return (
        <MuiPickersUtilsProvider
            libInstance={libInstance}
            utils={util}
            locale={locale}>
            <DatePicker
                disabled={disabled}
                required={required}
                clearable={true}
                disableToolbar
                variant="inline"
                format={momentFormat}
                id={name}
                label={title}
                value={value ? moment(value) : null}
                onBlur={onBlur}
                autoOk
                minDate={new Date('0000-00-00')}
                onChange={handleDateChange}
                InputProps={{
                    endAdornment: (
                        <TodayIcon color={disabled ? 'disabled' : 'action'} />
                    ),
                }}
            />
        </MuiPickersUtilsProvider>
    );
};
export default InputDate;
