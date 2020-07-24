import {LangBaseJson, Language} from './types';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {formatMoment} from './funstions';

export const useLanguage = <D = string>(
    str: LangBaseJson<D> | undefined,
    defaultValue?: D,
): D | undefined => {
    const language = useSelector<RootState, Language>(
        (state) => state.language,
    );
    return str && str[language] ? str[language] : defaultValue;
};

export const useLanguageSelector = () => {
    const language = useSelector<RootState, Language>(
        (state) => state.language,
    );

    return (str: LangBaseJson | undefined): string => {
        return str && str[language] ? str[language] : '';
    };
};
export const useDirection = (): boolean => {
    const rtlLanguages = ['fa', 'ar'];

    const language = useSelector<RootState, Language>(
        (state) => state.language,
    );

    return rtlLanguages.includes(language);
};

export const useFormat = (
    format: LangBaseJson = {
        en: 'YYYY-MM-DD-(hh:mm)',
        fa: 'jYYYY/jMM/jDD-(hh:mm)',
    },
) => {
    const languageSelector = useLanguageSelector();
    return (time: Date): string => {
        return languageSelector(formatMoment(time, format));
    };
};

export const useJoin = (
    joiner: LangBaseJson = {
        en: ', ', //comma
        fa: '، ', //virgool
    },
) => {
    const languageSelector = useLanguageSelector();
    return (array: string[]) => array.join(languageSelector(joiner));
};
