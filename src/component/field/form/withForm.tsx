import {FormType} from '../../../utils/types';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {DataReducer} from '../../../utils/generics';
import {useParams} from 'react-router';
import NotMatch from '../../utils/NotMatch';
import {Typography} from '@material-ui/core';

interface ComponentProps<F> {
    form: F;
}

const withForm = <F extends FormType>(
    getReducer: (state: RootState) => DataReducer<F[]>,
) => (Component: React.ComponentType<ComponentProps<F>>): React.FC => () => {
    const {id} = useParams();
    const allForms = useSelector<RootState, F[]>(
        (state) => getReducer(state).data,
    );
    const [form, setForm] = useState<F | undefined>(undefined);

    useEffect(() => {
        setForm(allForms.find((f) => f.id === parseInt(id)));
    }, [id, allForms]);

    return form ? (
        <>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <Typography variant="h5" className="m-1">
                    {form.title}
                </Typography>
                <Typography
                    variant="caption"
                    className="m-1">{`(${form.id})`}</Typography>
            </div>
            <Component form={form} />
        </>
    ) : (
        <NotMatch />
    );
};

export default withForm;
