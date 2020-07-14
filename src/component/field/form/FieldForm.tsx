import React from 'react';
import createGenericForm from '../createGenericForm';
import {Form} from '../../../utils/types';

const FieldForm = createGenericForm<Form>((state) => state.field.forms);
export default FieldForm;
