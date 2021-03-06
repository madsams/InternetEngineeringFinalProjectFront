import React from 'react';
import {Strings} from '../../utils/types';
import ITypography from './ITypography';

const strings: Strings = {
    en: 'This page is not exist',
    fa: 'صفحه مورد نظر شما یافت نشد',
};
const NotMatch = () => (
    <div className="d-flex flex-1 align-items-center justify-content-center">
        <ITypography text={strings} variant={'h3'} />
    </div>
);
export default NotMatch;
