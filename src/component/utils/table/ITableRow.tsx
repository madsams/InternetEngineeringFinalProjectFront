import {Collapse, IconButton, TableCell, TableRow} from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {CollapsibleProps} from './types';
import {IObject} from '../../../utils/types';

const useStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

interface ITableRowProps<A> {
    row: A;
    getValues: (row: A) => (string | null)[];
    renderCollapsible?: React.ComponentType<CollapsibleProps<A>>;
}

const ITableRow = <A extends IObject>({
    row,
    renderCollapsible: Collapsible,
    getValues,
}: ITableRowProps<A>) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState<boolean>(false);
    const cells = getValues(row);
    return (
        <React.Fragment>
            <TableRow
                hover
                onClick={() => setOpen(!open)}
                className={classes.root}>
                {Collapsible && (
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}>
                            {open ? (
                                <KeyboardArrowUpIcon />
                            ) : (
                                <KeyboardArrowDownIcon />
                            )}
                        </IconButton>
                    </TableCell>
                )}
                <TableCell align="right">{row['#']}</TableCell>
                {cells.map((cell, index) => (
                    <TableCell align="right" key={'c' + index}>
                        {cell || '_'}
                    </TableCell>
                ))}
            </TableRow>
            {Collapsible && (
                <TableRow>
                    <TableCell
                        style={{paddingBottom: 0, paddingTop: 0}}
                        colSpan={cells.length + 2}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Collapsible row={row} />
                        </Collapse>
                    </TableCell>
                </TableRow>
            )}
        </React.Fragment>
    );
};
export default ITableRow;
