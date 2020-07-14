import {FormType} from '../../utils/types';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {DataReducer} from '../../utils/generics';
import {useParams} from 'react-router';
import NotMatch from '../utils/NotMatch';

const createGenericForm = <F extends FormType>(
    // stringsJson: GenericFormsListString,
    getReducer: (state: RootState) => DataReducer<F[]>,
) => () => {
    const {id} = useParams();
    const allForms = useSelector<RootState, F[]>(
        (state) => getReducer(state).data,
    );
    const [form, setForm] = useState<F | undefined>(undefined);

    useEffect(() => {
        setForm(allForms.find((f) => f.id == id));
    }, [id, allForms]);

    return <div>{form ? form.title : <NotMatch/>}</div>;
};

export default createGenericForm;
