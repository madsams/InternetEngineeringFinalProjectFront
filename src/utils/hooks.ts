import {LangBaseJson, Language} from './types';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

export const useLanguage = (str: LangBaseJson | undefined): string => {
    const language = useSelector<RootState, Language>(
        (state) => state.language,
    );
    return str && str[language] ? str[language] : '';
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
