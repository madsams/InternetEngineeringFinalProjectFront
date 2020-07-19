import React, {useState} from 'react';
import {Field, Form, LangBaseJson, StringsJson} from '../../../utils/types';
import withForm, {WithFormProps} from './withForm';
import {InputValues} from './input/types';
import FormInput from './input';
import {FormValues} from '../types';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {getSelectedFormDetail, submitForm} from '../actions';
import IButton from '../../utils/IButton';
import {useHistory} from 'react-router-dom';
import {FORM_ANSWERS} from '../paths';

type Errors = {
    [key: string]: LangBaseJson | null;
};

type Touched = {
    [key: string]: boolean;
};

const strings: StringsJson = {
    submitButton: {
        fa: 'ارسال',
        en: 'Submit',
    },
    reqError: {
        en: 'required',
        fa: 'این فیلد اجباریست!',
    },
};

function getInitialFormState(fields: Array<Field>, initialValue: any) {
    return fields.reduce(
        (obj, field) => ({
            ...obj,
            [field.name]: initialValue,
        }),
        {},
    );
}

const FieldFormDetail = ({form: {fields, id}}: WithFormProps<Form>) => {
    const [values, setValues] = useState<FormValues>(
        getInitialFormState(fields, null),
    );
    const [errors, setErrors] = useState<Errors>(
        getInitialFormState(fields, null),
    );
    const [touched, setTouched] = useState<Touched>(
        getInitialFormState(fields, false),
    );
    const isLoading = useSelector<RootState, boolean>(
        (state) => state.field.submitForm.isLoading,
    );
    const history = useHistory();
    const dispatch = useDispatch();

    const getHandleError = (name: string) => (error: LangBaseJson | null) =>
        setErrors((preErrors) => ({
            ...preErrors,
            [name]: error,
        }));
    const getHandleTouched = (name: string) => () =>
        setTouched((preTouched) => ({
            ...preTouched,
            [name]: true,
        }));
    const getHandleChange = (name: string) => (value: InputValues) => {
        setValues((preValues) => ({
            ...preValues,
            [name]: value,
        }));
        getHandleError(name)(null);
    };

    const checkRequires = () => {
        let isOk = true;
        fields
            .filter((item) => item.required)
            .map((item) => item.name)
            .filter((name) => !values[name])
            .forEach((name) => {
                isOk = false;
                getHandleTouched(name)();
                getHandleError(name)(strings.reqError);
            });
        return isOk;
    };

    const clearState = () => {
        setValues(getInitialFormState(fields, null));
        setErrors(getInitialFormState(fields, null));
        setTouched(getInitialFormState(fields, false));
    };

    const submitResolve = () => {
        clearState();
        history.push(FORM_ANSWERS);
    };

    const submit = () => {
        if (checkRequires()) {
            dispatch(submitForm(values, id, undefined, submitResolve));
        }
    };

    return (
        <div className="flex-1 flex-column justify-content-center align-items-stretch">
            {fields.map(({name, ...item}) => (
                <FormInput
                    {...item}
                    name={name}
                    key={name}
                    touched={touched[name]}
                    value={values[name]}
                    error={errors[name]}
                    onBlur={getHandleTouched(name)}
                    onChange={getHandleChange(name)}
                />
            ))}

            <IButton
                onClick={submit}
                isLoading={isLoading}
                title={strings.submitButton}
            />
        </div>
    );
};
export default withForm<Form>(
    (state) => state.field.formDetail,
    getSelectedFormDetail,
)(FieldFormDetail);
