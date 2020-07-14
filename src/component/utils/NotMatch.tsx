import React from 'react';
import {StringsJson} from '../../utils/types';
import ITypography from './ITypography';

const strings: StringsJson = {
    code: {
        en: '404',
        fa: '۴۰۴',
    },
    text: {
        en: 'This page is not exist',
        fa: 'صفحه مورد نظر شما یافت نشد',
    },
};
const NotMatch = () => (
    <div className="d-flex flex-column flex-1 align-items-center justify-content-center h-100">
        <ITypography
            text={strings.code}
            variant="h1"
            align="center"
            className="m-3"
        />
        <ITypography text={strings.text} variant="h4" align="center" />
    </div>
);
export default NotMatch;
