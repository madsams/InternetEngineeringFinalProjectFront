import {LangBaseJson, Language, Order} from './types';
import TimeAgo from 'javascript-time-ago';
import {Locale} from 'javascript-time-ago/locale';
import fa from 'javascript-time-ago/locale/fa';
import en from 'javascript-time-ago/locale/en';
import moment from 'moment-jalaali';

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
export const formatTimeAgo = (time: Date): LangBaseJson => ({
    en: _formatTimeAgo('en-US', time),
    fa: _formatTimeAgo('fa-IR', time),
});

export const formatMoment = (
    time: Date,
    format: LangBaseJson = {
        en: 'YYYY-MM-DD',
        fa: 'jYYYY/jMM/jDD',
    },
): LangBaseJson => ({
    en: moment(time).format(format.en),
    fa: moment(time).format(format.fa),
});

export const concat2LangBaseJsons = (
    json1: LangBaseJson<string>,
    json2: LangBaseJson<string>,
): LangBaseJson<string> => ({
    en: json1.en + json2.en,
    fa: json1.fa + json2.fa,
});

export const concatLangBaseJsonWithStr = (
    json1: LangBaseJson<string>,
    str: string,
): LangBaseJson<string> => ({
    en: json1.en + str,
    fa: json1.fa + str,
});

export const concatStrWithLangBaseJson = (
    json1: LangBaseJson<string>,
    str: string,
): LangBaseJson<string> => ({
    en: str + json1.en,
    fa: str + json1.fa,
});

function descendingComparator(a: any, b: any) {
    if (a === b) return 0;
    if (a === null) return -1;
    if (b === null) return 1;

    if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b, 'standard', {sensitivity: 'case'});
    }

    return b > a ? -1 : 1;
}

export const comparator = (a: any, b: any, order: Order): number =>
    order === 'desc' ? descendingComparator(a, b) : -descendingComparator(a, b);

export const removeProperty = (
    object: {
        [keys: string]: any;
    },
    ...properties: string[]
): object => {
    let newObject = {...object};
    properties.forEach((p) => {
        delete newObject[p];
    });
    return newObject;
};
