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
    Order,
    StringsJson,
} from '../../../utils/types';
import ITypography from '../../utils/ITypography';
import {comparator} from '../../../utils/funstions';
import {useFormat} from '../../../utils/hooks';

interface ITableProps {
    data: FormTable;
}

interface TableRow extends FormAnswersRecordValues {
    createdAt: string;
    '#': number;
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
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<string>();
    const [array, setArray] = React.useState<TableRow[]>(
        data.records.map((v, index) => ({
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
                (e, i) => [e, i] as [TableRow, number],
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

    return (
        <Paper>
            <TableContainer>
                <Table>
                    <ITableHeader
                        heads={Object.keys(array[0])}
                        orderBy={orderBy}
                        order={order}
                        onRequestSort={handleRequestSort}
                    />
                    <TableBody>
                        {array.map((row, index) => (
                            <TableRow hover key={'r' + index}>
                                {Object.values(row).map((cell, index) => (
                                    <TableCell align="right" key={'c' + index}>
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
                                .map((key, index) => (
                                    <TableCell align="right" key={'s' + index}>
                                        {data.sum[key] || '_'}
                                    </TableCell>
                                ))}
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Paper>
    );
};
export default ITable;
