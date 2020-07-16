import {FormAnswer} from '../../../utils/types';
import React from 'react';
import withForm from './withForm';
import {getSelectedFormAnswerDetail} from '../actions';

interface FieldFormProps {
    form: FormAnswer;
}

const FieldFormAnswerDetail = ({form}: FieldFormProps) => (
    <>filled: {form.title}</>
);
export default withForm<FormAnswer>(
    (state) => state.field.formAnswerDetail,
    getSelectedFormAnswerDetail,
)(FieldFormAnswerDetail);
