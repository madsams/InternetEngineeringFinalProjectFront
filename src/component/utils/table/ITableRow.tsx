import {Collapse, IconButton, TableCell, TableRow} from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {CollapsibleProps} from './types';

const useStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

interface ITableRowProps<A> {
    row: A;
    getValues: (row: A) => string[];
    renderCollapsible?: React.ComponentType<CollapsibleProps<A>>;
}

const ITableRow = <A extends object>({
    row,
    renderCollapsible: Collapsible,
    getValues,
}: ITableRowProps<A>) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState<boolean>(false);
    return (
        <React.Fragment>
            <TableRow hover className={'text-decoration-none ' + classes.root}>
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
                {getValues(row).map((cell, index) => (
                    <TableCell align="right" key={'c' + index}>
                        {cell}
                    </TableCell>
                ))}
            </TableRow>
            {Collapsible && (
                <TableRow>
                    <TableCell
                        style={{paddingBottom: 0, paddingTop: 0}}
                        colSpan={6}>
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
