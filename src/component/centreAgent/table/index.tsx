import React, {useEffect} from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableRow,
} from '@material-ui/core';
import ITableHeader from './ITableHeader';
import {
    FormAnswersRecordValues,
    FormTable,
    ID,
    Order,
    StringsJson,
} from '../../../utils/types';
import ITypography from '../../utils/ITypography';
import {comparator, removeProperty} from '../../../utils/funstions';
import {useFormat} from '../../../utils/hooks';
import {Link} from 'react-router-dom';
import {FORM_RECORD_DETAIL} from '../paths';
import ITablePagination from './ITablePagination';

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
};

const ITable = ({data}: ITableProps) => {
    const formatMoment = useFormat(strings.momentFormat);
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
            <ITablePagination
                page={page}
                count={array.length}
                rowsPerPage={rowsPerPage}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
};
export default ITable;
