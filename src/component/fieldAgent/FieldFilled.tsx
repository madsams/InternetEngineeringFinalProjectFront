import {FilledForm} from '../../utils/types';
import {getFilledForms} from './actions';
import FilledListItem from './FilledListItem';
import createGenericFormsList from './createGenericFormsList';

const strings = {
    title: {
        en: 'Filled Forms',
        fa: 'فرم‌های پر شده',
    },
    subtitle: {
        en: 'Click for more information',
        fa: 'برای اطلاعات بیشتر کلیک کنید',
    },
};
const FieldFilled = createGenericFormsList<FilledForm>(
    strings,
    (state) => state.field.filled,
    () => getFilledForms(undefined),
    FilledListItem,
);
export default FieldFilled;
