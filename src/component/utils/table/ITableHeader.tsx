import {
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
} from '@material-ui/core';
import React from 'react';
import {Order} from '../../../utils/types';

interface ITableHeaderProps {
    heads: Array<string>;
    orderBy: string | undefined;
    order: Order;
    onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
    isCollapsible?: boolean;
}

const ITableHeader = ({
    heads,
    orderBy,
    order,
    onRequestSort,
    isCollapsible,
}: ITableHeaderProps) => {
    const createSortHandler = (property: string) => (
        event: React.MouseEvent<unknown>,
    ) => {
        onRequestSort(event, property);
    };
    return (
        <TableHead>
            <TableRow>
                {isCollapsible && <TableCell />}
                {heads.map((head) => (
                    <TableCell
                        key={'h' + head}
                        align="right"
                        sortDirection={orderBy === head ? order : false}>
                        <TableSortLabel
                            active={orderBy === head}
                            direction={orderBy === head ? order : 'asc'}
                            onClick={createSortHandler(head)}>
                            {head}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};
export default ITableHeader;
