import React, {useState} from 'react';
import {Field, Form, LangBaseJson, StringsJson} from '../../../utils/types';
import withForm from './withForm';
import {InputValues} from './input/types';
import FormInput from './input';
import {FormValues} from '../types';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {submitForm} from '../actions';
import IButton from '../../utils/IButton';

interface FieldFormProps {
    form: Form;
}

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

const FieldForm = ({form: {fields, id}}: FieldFormProps) => {
    const [values, setValues] = useState<FormValues>(
        getInitialFormState(fields, undefined),
    );
    const [errors, setErrors] = useState<Errors>(
        getInitialFormState(fields, undefined),
    );
    const [touched, setTouched] = useState<Touched>(
        getInitialFormState(fields, false),
    );
    const isLoading = useSelector<RootState, boolean>(
        (state) => state.field.submitForm.isLoading,
    );
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

    const clearState = () => {
        setValues(getInitialFormState(fields, undefined));
        setErrors(getInitialFormState(fields, undefined));
        setTouched(getInitialFormState(fields, false));
    };

    function checkRequires() {
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
    }

    const submit = () => {
        console.log(fields);
        if (checkRequires()) {
            dispatch(submitForm(values, id, clearState));
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
export default withForm<Form>((state) => state.field.forms)(FieldForm);
