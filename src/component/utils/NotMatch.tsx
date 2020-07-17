import React from 'react';
import {LangBaseJson, StringCreatorsJson, StringsJson} from '../../utils/types';
import ITypography from './ITypography';

interface NotMatchProps {
    prefix?: LangBaseJson;
}
const strings: StringsJson = {
    code: {
        en: '404',
        fa: '۴۰۴',
    },
};

const stringCreators: StringCreatorsJson = {
    text: (text: LangBaseJson) => ({
        en: text.en + 'This page is not exist',
        fa: text.fa + ' مورد نظر شما یافت نشد',
    }),
};
const NotMatch = ({prefix = {en: 'صفحه', fa: 'page'}}: NotMatchProps) => (
    <div className="d-flex flex-column flex-1 align-items-center justify-content-center h-100">
        <ITypography
            text={strings.code}
            variant="h1"
            align="center"
            className="m-3"
        />
        <ITypography
            text={stringCreators.text(prefix)}
            variant="h4"
            align="center"
        />
    </div>
);
export default NotMatch;
