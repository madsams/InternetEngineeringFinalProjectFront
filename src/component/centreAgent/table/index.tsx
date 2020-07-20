import React, {useEffect} from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TablePagination,
    TableRow,
} from '@material-ui/core';
import ITableHeader from './ITableHeader';
import {
    FormAnswersRecordValues,
    FormTable,
    ID,
    Order,
    StringCreatorsJson2,
    StringsJson,
} from '../../../utils/types';
import ITypography from '../../utils/ITypography';
import {comparator, removeProperty} from '../../../utils/funstions';
import {useFormat, useLanguage} from '../../../utils/hooks';
import {Link} from 'react-router-dom';
import {FORM_RECORD_DETAIL} from '../paths';

interface ITableProps {
    data: FormTable;
}

interface TableRowType extends FormAnswersRecordValues {
    createdAt: string;
    '#': number;
    id: ID;
}

const strings: StringsJson = {
    sum: {
        en: 'Sum',
        fa: 'مجموع',
    },
    momentFormat: {
        en: 'YYYY-MM-DD (hh:mm)',
        fa: '(hh:mm) jYYYY/jMM/jDD',
    },
    labelRowsPerPage: {
        en: 'Rows per page:',
        fa: 'سطر در صفحه:',
    },
};

const stringCreators: StringCreatorsJson2 = {
    labelDisplayedRows: {
        en: ({from, to, count}) =>
            `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`,
        fa: ({from, to, count}) =>
            `${from}-${to} از ${count !== -1 ? count : `بیشتر از ${to}`}`,
    },
};

const ITable = ({data}: ITableProps) => {
    const formatMoment = useFormat(strings.momentFormat);
    const labelDisplayedRows = useLanguage(stringCreators.labelDisplayedRows);
    const labelRowsPerPage = useLanguage(strings.labelRowsPerPage);
    const [page, setPage] = React.useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<string>();
    const [array, setArray] = React.useState<TableRowType[]>(
        data.records.map((v, index) => ({
            id: v.answerId,
            '#': index,
            ...v.values,
            createdAt: formatMoment(v.createdAt),
        })),
    );
    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: string,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    useEffect(() => {
        setArray((prevState) => {
            const sortableArray = prevState.map(
                (e, i) => [e, i] as [TableRowType, number],
            );
            sortableArray.sort((a, b) => {
                if (!orderBy) return 0;
                const o = comparator(a[0][orderBy], b[0][orderBy], order);
                if (o !== 0) return o;
                return a[1] - b[1];
            });

            return sortableArray.map((i) => i[0]);
        });
    }, [order, orderBy]);

    const handleChangePage = (event: unknown, newPage: number) =>
        setPage(newPage);

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    };

    return (
        <Paper>
            <TableContainer>
                <Table>
                    <ITableHeader
                        heads={Object.keys(array[0]).filter((i) => i !== 'id')}
                        orderBy={orderBy}
                        order={order}
                        onRequestSort={handleRequestSort}
                    />
                    <TableBody>
                        {array
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage,
                            )
                            .map((row, index) => (
                                <TableRow
                                    hover
                                    key={'r' + index}
                                    component={Link}
                                    to={FORM_RECORD_DETAIL(row.id)}>
                                    {Object.values(
                                        removeProperty(row, 'id'),
                                    ).map((cell, index) => (
                                        <TableCell
                                            align="right"
                                            key={'c' + index}>
                                            {cell}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell align="right">
                                <ITypography
                                    align="right"
                                    text={strings.sum}
                                    variant="subtitle2"
                                />
                            </TableCell>
                            {Object.keys(array[0])
                                .filter((i) => i !== '#')
                                .filter((i) => i !== 'id')
                                .map((key, index) => (
                                    <TableCell align="right" key={'s' + index}>
                                        {data.sum[key] || '_'}
                                    </TableCell>
                                ))}
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15, 25, 50]}
                count={array.length}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                page={page}
                rowsPerPage={rowsPerPage}
                labelDisplayedRows={labelDisplayedRows}
                labelRowsPerPage={labelRowsPerPage}
            />
        </Paper>
    );
};
export default ITable;
