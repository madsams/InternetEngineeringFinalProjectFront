import {FormAnswer} from '../../utils/types';
import {getFormAnswers} from './actions';
import AnswersListItem from './AnswersListItem';
import createGenericFormsList from '../utils/createGenericFormsList';

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
    AnswersListItem,
);
export default FieldFilled;
