import {TableBody, TableCell, TableRow} from '@material-ui/core';
import {Link} from 'react-router-dom';
import React from 'react';

interface ITableBodyProps<A> {
    array: A[];
    getValues: (row: A) => string[];
    getPath: (id: string) => string;
}

type IObject = {[k: string]: any};
const ITableBody = <A extends IObject>({
    array,
    getValues,
    getPath,
}: ITableBodyProps<A>) => {
    return (
        <TableBody>
            {array.map((row, index) => (
                <TableRow
                    hover
                    key={'r' + index}
                    component={Link}
                    to={getPath(row.id)}>
                    {getValues(row).map((cell, index) => (
                        <TableCell align="right" key={'c' + index}>
                            {cell}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBody>
    );
};
export default ITableBody;
