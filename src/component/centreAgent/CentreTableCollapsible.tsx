import {ID, IObject, StringsJson} from '../../utils/types';
import {Link} from 'react-router-dom';
import React from 'react';
import {FORM_RECORD_DETAIL} from './paths';
import ITypography from '../utils/ITypography';

interface Row extends IObject {
    id: ID;
}

interface CentreTableCollapsibleProps<A extends Row> {
    row: A;
}

const strings: StringsJson = {
    text1: {
        en: 'Click ',
        fa: 'برای دیدن جزییات پاسخ روی ',
    },
    here: {
        en: 'here',
        fa: 'اینجا',
    },
    text2: {
        en: ' to see detail of the answer',
        fa: ' کلیک کنید',
    },
};

const CentreTableCollapsible = <A extends Row>({
    row,
}: CentreTableCollapsibleProps<A>) => {
    // todo get user info
    return (
        <div className="m-3 d-flex flex-row">
            <ITypography text={strings.text1} />
            <Link to={FORM_RECORD_DETAIL(row.id)}>
                <ITypography text={strings.here} className="mr-1 ml-1" />
            </Link>
            <ITypography text={strings.text2} />
        </div>
    );
};
export default CentreTableCollapsible;
