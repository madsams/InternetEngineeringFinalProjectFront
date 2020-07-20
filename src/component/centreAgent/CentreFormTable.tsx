import React, {useEffect} from 'react';
import {Paper} from '@material-ui/core';
import {FormTable, StringsJson} from '../../utils/types';
import {useFormat} from '../../utils/hooks';
import {FORM_RECORD_DETAIL} from './paths';
import ITableContainer from '../utils/table';
import IFailedChecker from '../utils/IFailedChecker';
import {getFormTable} from './actions';
import ILoadingChecker from '../utils/ILoadingChecker';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';

const strings: StringsJson = {
    momentFormat: {
        en: 'YYYY-MM-DD (hh:mm)',
        fa: '(hh:mm) jYYYY/jMM/jDD',
    },
};

const CentreFormTable = () => {
    const formatMoment = useFormat(strings.momentFormat);
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
        <Paper>
            <ILoadingChecker isLoading={isLoading}>
                <IFailedChecker
                    isFailed={isFailed}
                    reloadAction={() => getFormTable(id)}>
                    <ITableContainer
                        data={data.records.map((v) => ({
                            id: v.answerId,
                            ...v.values,
                            createdAt: formatMoment(v.createdAt),
                        }))}
                        sum={data.sum}
                        getPath={FORM_RECORD_DETAIL}
                    />
                </IFailedChecker>
            </ILoadingChecker>
        </Paper>
    );
};
export default CentreFormTable;
