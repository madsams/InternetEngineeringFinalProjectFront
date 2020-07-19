import React from 'react';
import ITypography from './ITypography';
import {StringsJson} from '../../utils/types';

const strings: StringsJson = {
    emptyList: {
        en: 'List is empty',
        fa: 'داده‌ای جهت نمایش موجود نیست',
    },
};

interface IEmptyCheckerProps {
    data: Array<any>;
    children: React.ReactNode;
}

const IEmptyChecker = ({data, children}: IEmptyCheckerProps) =>
    data && data.length === 0 ? (
        <ITypography
            variant="subtitle2"
            text={strings.emptyList}
            color="textSecondary"
            align="center"
        />
    ) : (
        <React.Fragment>{children}</React.Fragment>
    );
export default IEmptyChecker;
