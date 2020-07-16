import {LangBaseJson, Language} from './types';
import TimeAgo from 'javascript-time-ago';
import {Locale} from 'javascript-time-ago/locale';
import fa from 'javascript-time-ago/locale/fa';
import en from 'javascript-time-ago/locale/en';

export const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

export const setLanguageToHTML = (language: Language) => {
    const html = document.getElementsByTagName('html')[0];
    html.lang = language;
};

const _setLanguageToTimeAgo = (locales: LangBaseJson<Locale>) =>
    Object.values(locales).forEach((l) => TimeAgo.addLocale(l));

const _formatTimeAgo = (language: string, time: number | Date): string => {
    _setLanguageToTimeAgo({fa, en});
    return new TimeAgo(language).format(time);
};
export const formatTimeAgo = (time: Date): LangBaseJson => {
    const iTime = new Date(time);
    return {
        en: _formatTimeAgo('en-US', iTime),
        fa: _formatTimeAgo('fa-IR', iTime),
    };
};
