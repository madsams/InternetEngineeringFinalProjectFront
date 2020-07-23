import React, {useEffect} from 'react';
import {Paper} from '@material-ui/core';
import {
    FieldTypes,
    FormAnswersRecordValues,
    FormTable,
    ID,
    Location,
    PolygonsOfLocation,
    StringCreatorsJson,
    StringsJson,
} from '../../utils/types';
import {useFormat, useJoin, useLanguage} from '../../utils/hooks';
import ITableContainer from '../utils/table';
import IFailedChecker from '../utils/IFailedChecker';
import {getFormTable} from './actions';
import ILoadingChecker from '../utils/ILoadingChecker';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import CentreTableCollapsible from './CentreTableCollapsible';
import CentreTableToolbar from './CentreTableToolbar';
import {useGenerateFormTableParam} from './hook';

const strings: StringsJson = {
    subtitle: {
        en: 'Click to see detail of the answer',
        fa: 'برای دیدن جزییات پاسخ روی سطر پاسخ‌ مورد نظر کلیک کنید',
    },
    momentFormat: {
        en: 'YYYY-MM-DD-(hh:mm)',
        fa: 'jYYYY/jMM/jDD-(hh:mm)',
    },
    createdAt: {
        en: 'Answer at',
        fa: 'تاریخ',
    },
};

const stringCreators: StringCreatorsJson<string, string> = {
    getTitle: (title: string) => ({
        en: `Answer of form "${title}"`,
        fa: `لیست پاسخهای "${title}"`,
    }),
};

interface TableRowType {
    id: ID;
    value: FormAnswersRecordValues;
    createdAt: Date;
}

const CentreFormTable = () => {
    const formatMoment = useFormat(strings.momentFormat);
    const createdAtInHeader = useLanguage(strings.createdAt);
    const {id} = useParams();
    const dispatch = useDispatch();
    const join = useJoin();
    const data = useSelector<RootState, FormTable>(
        (state) => state.centre.formTable.data,
    );
    const isLoading = useSelector<RootState, boolean>(
        (state) => state.centre.formTable.isLoading,
    );
    const isFailed = useSelector<RootState, boolean>(
        (state) => state.centre.formTable.isFailed,
    );
    const param = useGenerateFormTableParam();

    useEffect(() => {
        dispatch(getFormTable(id, param));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, id]);

    const tableData = data.records.map((v) => ({
        id: v.answerId,
        value: v.values,
        createdAt: v.createdAt,
    }));
    const headerTitles = [
        '#',
        ...data.fields.map((f) => f.title),
        createdAtInHeader as string,
    ];
    const getRowValues = (row: TableRowType) => {
        const cells = Object.keys(row.value).map((name) => {
            const value = row.value[name];
            if (value) {
                const fieldInfo = data.fields.find((f) => f.name === name);
                if (fieldInfo) {
                    const type = fieldInfo.type;
                    if (type === FieldTypes.Text) {
                        return value as string;
                    } else if (type === FieldTypes.Number) {
                        return '' + value;
                    } else if (type === FieldTypes.Date) {
                        return formatMoment(new Date(value as string));
                    } else if (type === FieldTypes.Location) {
                        if ((value as PolygonsOfLocation)[0]) {
                            const val = value as PolygonsOfLocation;
                            return join(val);
                        } else {
                            const val = value as Location;
                            return `(${val.lat.toFixed(3)}, ${val.lng.toFixed(
                                3,
                            )})`;
                        }
                    }
                }
            }
            return '_';
        });
        return [...cells, formatMoment(row.createdAt)];
    };
    const names = [...data.fields.map((f) => f.name), 'createdAt'];
    return (
        <ILoadingChecker isLoading={isLoading}>
            <IFailedChecker
                isFailed={isFailed}
                reloadAction={() => getFormTable(id, param)}>
                <Paper className="p-2">
                    <CentreTableToolbar
                        title={stringCreators.getTitle(data.title)}
                    />
                    <ITableContainer<TableRowType>
                        data={tableData}
                        headerTitles={headerTitles}
                        sum={data.sum}
                        renderCollapsible={CentreTableCollapsible}
                        getRowValue={getRowValues}
                        names={names}
                    />
                </Paper>
            </IFailedChecker>
        </ILoadingChecker>
    );
};
export default CentreFormTable;
