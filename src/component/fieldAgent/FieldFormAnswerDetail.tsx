import React from 'react';
import {FormAnswer} from '../../utils/types';
import withForm, {WithFormProps} from '../utils/withForm';
import {getSelectedFormAnswerDetail} from './actions';
import FormInput from '../utils/input';

const emptyFunc = () => {};
const FieldFormAnswerDetail = ({form: {fields}}: WithFormProps<FormAnswer>) => (
    <div className="flex-1 flex-column justify-content-center align-items-stretch">
        {fields.map((item) => (
            <FormInput
                disabled
                {...item}
                error={null}
                touched={false}
                key={item.name}
                onBlur={emptyFunc}
                onChange={emptyFunc}
                value={item.value}
            />
        ))}
    </div>
);
export default withForm<FormAnswer>(
    (state) => state.field.formAnswerDetail,
    getSelectedFormAnswerDetail,
)(FieldFormAnswerDetail);
