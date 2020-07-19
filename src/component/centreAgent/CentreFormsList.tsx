import createGenericFormsList from '../utils/createGenericFormsList';
import {Form} from '../../utils/types';
import {getForms} from './actions';
import CentreFormListItem from './CentreFormsListItem';

const strings = {
    title: {
        en: 'List of forms',
        fa: 'لیست فرم‌ها',
    },
    subtitle: {
        en: 'Click to see table of answers',
        fa:
            'روی یکی از فرم‌های زیر کلیک کنید تا جدول جواب‌های داده شده را ببینید',
    },
};
const CentreHome = createGenericFormsList<Form>(
    strings,
    (state) => state.centre.forms,
    getForms,
    CentreFormListItem,
);
export default CentreHome;
