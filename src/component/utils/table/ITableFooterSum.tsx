import {TableCell, TableFooter, TableRow} from '@material-ui/core';
import ITypography from '../ITypography';
import React from 'react';
import {StringsJson} from '../../../utils/types';

interface ITableFooterSumProps {
    keys: string[];
    sum: {
        [key: string]: number | undefined;
    };
    isCollapsible?: boolean;
}
const strings: StringsJson = {
    sum: {
        en: 'Sum',
        fa: 'مجموع',
    },
};

const ITableFooterSum = ({keys, sum, isCollapsible}: ITableFooterSumProps) => {
    return (
        <TableFooter>
            <TableRow>
                {isCollapsible && <TableCell />}
                <TableCell align="right">
                    <ITypography
                        align="right"
                        text={strings.sum}
                        variant="subtitle2"
                    />
                </TableCell>
                {keys.map((key, index) => (
                    <TableCell align="right" key={'s' + index}>
                        {sum[key] || '_'}
                    </TableCell>
                ))}
            </TableRow>
        </TableFooter>
    );
};
export default ITableFooterSum;
