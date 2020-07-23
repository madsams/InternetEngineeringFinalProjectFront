import {createStyles, Theme, Toolbar} from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {LangBaseJson} from '../../utils/types';
import ITypography from '../utils/ITypography';
import CentreTableFilter from './filter/CentreTableFilter';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(1),
        },
    }),
);

interface CentreTableToolbarProps {
    title: LangBaseJson;
}

const CentreTableToolbar = ({title}: CentreTableToolbarProps) => {
    const classes = useStyles();
    return (
        <Toolbar
            className={
                'flex-1 flex-row justify-content-between ' + classes.root
            }>
            <ITypography text={title} />
            <CentreTableFilter />
        </Toolbar>
    );
};
export default CentreTableToolbar;
