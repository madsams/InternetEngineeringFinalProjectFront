import React from 'react';
import {FilledForm} from '../../../utils/types';
import {getFilledForms} from '../actions';
import FilledFormsListItem from './FilledFormsListItem';
import createGenericFormsList from '../createGenericFormsList';

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
    getFilledForms,
    FilledFormsListItem,
);
export default FieldFilled;
