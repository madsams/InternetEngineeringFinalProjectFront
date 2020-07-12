import {Language, Strings} from './types';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

export const useLanguage = (str: Strings): string => {
    const language = useSelector<RootState, Language>(
        (state) => state.language,
    );
    return str[language] || '';
};
