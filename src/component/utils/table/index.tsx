import {Table, TableContainer} from '@material-ui/core';
import ITableHeader from './ITableHeader';
import {comparator, removeProperty} from '../../../utils/funstions';
import ITableBody from './ITableBody';
import ITableFooterSum from './ITableFooterSum';
import ITablePagination from './ITablePagination';
import React, {useEffect} from 'react';
import {ID, Order} from '../../../utils/types';
import {CollapsibleProps} from './types';

interface Data {
    id: ID;

    [key: string]: any;
}

interface ITableContainerProps<D extends Data> {
    data: D[];
    sum: {
        [key: string]: number | undefined;
    };
    renderCollapsible?: React.ComponentType<CollapsibleProps<D>>;
}

const ITableContainer = <D extends Data>({
    data,
    sum,
    renderCollapsible,
}: ITableContainerProps<D>) => {
    const [page, setPage] = React.useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<string>();
    const [array, setArray] = React.useState<D[]>(
        data.map((value, index) => ({'#': index + 1, ...value})),
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
                (e, i) => [e, i] as [D, number],
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
    const getTableBodyValues = (row: D) =>
        Object.values(removeProperty(row, 'id'));
    return (
        <TableContainer>
            <Table>
                <ITableHeader
                    heads={Object.keys(removeProperty(array[0], 'id'))}
                    orderBy={orderBy}
                    order={order}
                    onRequestSort={handleRequestSort}
                    isCollapsible={!!renderCollapsible}
                />
                <ITableBody
                    array={array.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage,
                    )}
                    getValues={getTableBodyValues}
                    renderCollapsible={renderCollapsible}
                />
                <ITableFooterSum
                    keys={Object.keys(removeProperty(array[0], 'id', '#'))}
                    sum={sum}
                    isCollapsible={!!renderCollapsible}
                />
            </Table>
            <ITablePagination
                page={page}
                count={array.length}
                rowsPerPage={rowsPerPage}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
};
export default ITableContainer;
