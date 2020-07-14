import React from 'react';
import {StringsJson} from '../../../utils/types';
import ITypography from '../../utils/ITypography';
import ILoader from '../../utils/ILoader';
import IList from '../../utils/IList';

const strings: StringsJson = {
    title: {
        en: 'List of forms',
        fa: 'لیست فرم‌ها',
    },
    subtitle: {
        en: 'Click on one of them to be redirected to the relevant form',
        fa: 'روی یکی از فرم‌های زیر کلیک کنید تا به صفحه‌ی مورد نظر هدایت شوید',
    },
};
const FieldHome = () => (
    <div className="flex-1 flex-column align-items-center m-2">
        <ITypography text={strings.title} variant="h3" />
        <br />
        <ITypography text={strings.subtitle} variant="subtitle1" />
        <br />
        <ILoader isLoading={false}>
            <IList data={[]} itemComponent={() => <div>koft</div>} />
        </ILoader>
    </div>
);
export default FieldHome;
