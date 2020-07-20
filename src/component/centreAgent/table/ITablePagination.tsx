import {TablePagination} from '@material-ui/core';
import React from 'react';
import {StringCreatorsJson2, StringsJson} from '../../../utils/types';
import {useLanguage} from '../../../utils/hooks';

interface ITablePaginationProps {
    page: number;
    count: number;
    rowsPerPage: number;
    handleChangePage: (event: unknown, newPage: number) => void;
    handleChangeRowsPerPage: (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => void;
}

const strings: StringsJson = {
    labelRowsPerPage: {
        en: 'Rows per page:',
        fa: 'سطر در صفحه:',
    },
};

const stringCreators: StringCreatorsJson2 = {
    labelDisplayedRows: {
        en: ({from, to, count}) =>
            `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`,
        fa: ({from, to, count}) =>
            `${from}-${to} از ${count !== -1 ? count : `بیشتر از ${to}`}`,
    },
};

const ITablePagination = ({
    page,
    rowsPerPage,
    handleChangeRowsPerPage,
    handleChangePage,
    count,
}: ITablePaginationProps) => {
    const labelDisplayedRows = useLanguage(stringCreators.labelDisplayedRows);
    const labelRowsPerPage = useLanguage(strings.labelRowsPerPage);
    return (
        <TablePagination
            rowsPerPageOptions={[5, 10, 15, 25, 50]}
            count={count}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            labelDisplayedRows={labelDisplayedRows}
            labelRowsPerPage={labelRowsPerPage}
        />
    );
};
export default ITablePagination;
