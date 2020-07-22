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
    getValues: (row: A) => string[];
    renderCollapsible?: React.ComponentType<CollapsibleProps<A>>;
}

const ITableRow = <A extends IObject>({
    row,
    renderCollapsible: Collapsible,
    getValues,
}: ITableRowProps<A>) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState<boolean>(false);
    return (
        <React.Fragment>
            <TableRow
                hover
                onClick={() => setOpen(!open)}
                className={'text-decoration-none ' + classes.root}>
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
                        {/*todo*/}
                        {cell ? '' + cell : '_'}
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
