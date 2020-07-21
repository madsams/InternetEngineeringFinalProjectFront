import {TableBody} from '@material-ui/core';
import React from 'react';
import ITableRow from './ITableRow';
import {CollapsibleProps} from './types';

interface ITableBodyProps<A> {
    array: A[];
    getValues: (row: A) => string[];
    renderCollapsible?: React.ComponentType<CollapsibleProps<A>>;
}

type IObject = {[k: string]: any};

const ITableBody = <A extends IObject>({
    array,
    getValues,
    renderCollapsible,
}: ITableBodyProps<A>) => {
    return (
        <TableBody>
            {array.map((row, index) => (
                <ITableRow
                    row={row}
                    key={'r' + index}
                    renderCollapsible={renderCollapsible}
                    getValues={getValues}
                />
            ))}
        </TableBody>
    );
};
export default ITableBody;
