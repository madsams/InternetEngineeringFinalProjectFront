import React, {useEffect} from 'react';
import {Paper} from '@material-ui/core';
import {FormTable, StringCreatorsJson, StringsJson} from '../../utils/types';
import {useFormat, useLanguage} from '../../utils/hooks';
import ITableContainer from '../utils/table';
import IFailedChecker from '../utils/IFailedChecker';
import {getFormTable} from './actions';
import ILoadingChecker from '../utils/ILoadingChecker';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import ITypography from '../utils/ITypography';
import CentreTableCollapsible from './CentreTableCollapsible';

const strings: StringsJson = {
    subtitle: {
        en: 'Click to see detail of the answer',
        fa: 'برای دیدن جزییات پاسخ روی سطر پاسخ‌ مورد نظر کلیک کنید',
    },
    momentFormat: {
        en: 'YYYY-MM-DD (hh:mm)',
        fa: '(hh:mm) jYYYY/jMM/jDD',
    },
    createdAt: {
        en: 'Answer at',
        fa: 'تاریخ',
    },
};

const stringCreators: StringCreatorsJson<string, string> = {
    title: (title: string) => ({
        en: `Answer of form "${title}"`,
        fa: `لیست پاسخهای "${title}"`,
    }),
};

const CentreFormTable = () => {
    const formatMoment = useFormat(strings.momentFormat);
    const createdAtInHeader = useLanguage(strings.createdAt);
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
        dispatch(getFormTable(id));
    }, [dispatch, id]);
    return (
        <>
            <ITypography
                text={stringCreators.title(data.title)}
                variant="h5"
                align="center"
            />
            <br />
            <ITypography
                text={strings.subtitle}
                variant="subtitle1"
                align="center"
            />
            <br />
            <Paper className="p-2">
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
                            headerTitles={[
                                '#',
                                ...data.fields.map((f) => f.title),
                                createdAtInHeader as string,
                            ]}
                            sum={data.sum}
                            renderCollapsible={CentreTableCollapsible}
                        />
                    </IFailedChecker>
                </ILoadingChecker>
            </Paper>
        </>
    );
};
export default CentreFormTable;
