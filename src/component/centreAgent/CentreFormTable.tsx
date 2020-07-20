import React, {useEffect} from 'react';
import ITable from './table';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {FormTable} from '../../utils/types';
import {getFormTable} from './actions';
import {useParams} from 'react-router-dom';
import ILoadingChecker from '../utils/ILoadingChecker';
import IFailedChecker from '../utils/IFailedChecker';

const CentreFormTable = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const data = useSelector<RootState, FormTable>(
        (state) => state.centre.formTable.data,
    );
    const isLoading = useSelector<RootState, boolean>(
        (state) => state.centre.formTable.isLoading,
    );
    const isFailed = useSelector<RootState, boolean>(
        (state) => state.centre.formTable.isFailed,
    );
    useEffect(() => {
        // dispatch(getFormTable(id));
    }, [dispatch, id]);
    return (
        <ILoadingChecker isLoading={isLoading}>
            <IFailedChecker
                isFailed={isFailed}
                reloadAction={() => getFormTable(id)}>
                <ITable data={data} />
            </IFailedChecker>
        </ILoadingChecker>
    );
};
export default CentreFormTable;
