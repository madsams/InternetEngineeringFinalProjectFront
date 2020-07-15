import {FilledForm} from '../../../utils/types';
import React from 'react';
import withForm from './withForm';

interface FieldFormProps {
    form: FilledForm;
}

const FieldFilledForm = ({form}: FieldFormProps) => <>filled: {form.title}</>;
export default withForm<FilledForm>((state) => state.field.filled)(
    FieldFilledForm,
);
