import React from 'react';
import {CSVLink} from 'react-csv';
import {StringsJson} from '../../utils/types';
import ITypography from '../utils/ITypography';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Data} from 'react-csv/components/CommonPropTypes';

const strings: StringsJson = {
    getCsv: {
        en: 'Create CSV File',
        fa: 'گرفتن خروجی CSV',
    },
};

const useStyle = makeStyles({
    button: {
        maxWidth: 250,
        textTransform: 'none',
    },
});

interface GetCSVFileProps {
    data: Data;
    headers: string[];
}

const GetCSVFile = ({data, headers}: GetCSVFileProps) => {
    const classes = useStyle();
    return (
        <CSVLink data={data} headers={headers}>
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
