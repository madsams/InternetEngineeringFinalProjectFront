import {FormAnswer} from '../../utils/types';
import {getFormAnswers} from './actions';
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
const FieldFilled = createGenericFormsList<FormAnswer>(
    strings,
    (state) => state.field.formAnswers,
    getFormAnswers,
    FilledListItem,
);
export default FieldFilled;
