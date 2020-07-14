import React, {useEffect} from 'react';
import {Form, StringsJson} from '../../../utils/types';
import ITypography from '../../utils/ITypography';
import ILoader from '../../utils/ILoader';
import {useDispatch, useSelector} from 'react-redux';
import {getForms} from '../actions';
import {RootState} from '../../../store';
import IList from '../../utils/IList';
import FormsListItem from './FormsListItem';

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
const FieldHome = () => {
    const dispatch = useDispatch();
    const forms = useSelector<RootState, Array<Form>>(
        (state) => state.field.forms,
    );

    useEffect(() => {
        dispatch(getForms());
    }, [dispatch]);

    return (
        <div className="flex-1 flex-column align-items-center m-2">
            <ITypography text={strings.title} variant="h5" align="center" />
            <br />
            <ITypography
                text={strings.subtitle}
                variant="subtitle1"
                align="center"
            />
            <br />
            <ILoader isLoading={false}>
                <IList data={forms} itemComponent={FormsListItem} />
            </ILoader>
        </div>
    );
};
export default FieldHome;
