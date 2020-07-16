import {FormType} from '../../../utils/types';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {DataRequestReducer} from '../../../utils/generics';
import {useParams} from 'react-router';
import NotMatch from '../../utils/NotMatch';
import {Typography} from '@material-ui/core';
import ILoader from '../../utils/ILoader';

interface ComponentProps<F> {
    form: F;
}

const withForm = <F extends FormType>(
    getReducer: (state: RootState) => DataRequestReducer<F[]>,
) => (Component: React.ComponentType<ComponentProps<F>>): React.FC => () => {
    const {id} = useParams();
    const allForms = useSelector<RootState, F[]>(
        (state) => getReducer(state).data,
    );
    const [form, setForm] = useState<F | undefined>(undefined);

    useEffect(() => {
        //todo fetch forms/:id from back
        //todo setForm(allForms.find((f) => f.id === parseInt(id)));
        setForm(allForms.find((f) => f.id === id));
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
            <ILoader isLoading={!form}>
                <Component form={form} />
            </ILoader>
        </>
    ) : (
        <NotMatch />
    );
};

export default withForm;
