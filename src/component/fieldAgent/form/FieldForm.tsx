import React from 'react';
import {Form} from '../../../utils/types';
import withForm from './withForm';

interface FieldFormProps {
    form: Form;
}

const FieldForm = ({form}: FieldFormProps) => <></>;
export default withForm<Form>((state) => state.field.forms)(FieldForm);
