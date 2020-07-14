import {FormType, IThunkAction, LangBaseJson} from '../../utils/types';
import * as React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import ITypography from '../utils/ITypography';
import ILoader from '../utils/ILoader';
import IList from '../utils/IList';
import {DataReducer} from '../../utils/generics';

interface GenericFormsListString {
    title: LangBaseJson;
    subtitle: LangBaseJson;
}

const createGenericFormsList = <F extends FormType>(
    stringsJson: GenericFormsListString,
    getReducer: (state: RootState) => DataReducer<F[]>,
    getData: () => IThunkAction,
    listItemComponent: React.ComponentType<any>,
) => () => {
    const dispatch = useDispatch();
    const list = useSelector<RootState, Array<F>>(
        (state) => getReducer(state).data,
    );
    const isLoading = useSelector<RootState, boolean>(
        (state) => getReducer(state).isLoading,
    );

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);
    return (
        <div className="flex-1 flex-column align-items-center m-2">
            <ITypography text={stringsJson.title} variant="h5" align="center" />
            <br />
            <ITypography
                text={stringsJson.subtitle}
                variant="subtitle1"
                align="center"
            />
            <br />
            <ILoader isLoading={isLoading}>
                <IList data={list} itemComponent={listItemComponent} />
            </ILoader>
        </div>
    );
};

export default createGenericFormsList;
