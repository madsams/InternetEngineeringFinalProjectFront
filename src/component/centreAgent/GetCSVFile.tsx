import React from 'react';
import {CSVLink} from 'react-csv';
import {FormTable, StringsJson} from '../../utils/types';
import ITypography from '../utils/ITypography';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const strings: StringsJson = {
    getCsv: {
        en: 'Create CSV File',
        fa: 'گرفتن خروجی CSV',
    },
};

interface GetCSVFileProps {
    data: FormTable;
}

const useStyle = makeStyles({
    button: {
        maxWidth: 250,
        textTransform: 'none',
    },
});

const GetCSVFile = ({data}: GetCSVFileProps) => {
    const classes = useStyle();
    return (
        <CSVLink
            data={data.records.map((r) => r.values)}
            headers={data.fields.map((f) => ({label: f.title, key: f.name}))}>
            <Button
                variant="contained"
                color="primary"
                className={'m-3 ' + classes.button}>
                <ITypography text={strings.getCsv} />
            </Button>
        </CSVLink>
    );
};
export default GetCSVFile;
