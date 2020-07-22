import {createStyles, Theme, Toolbar} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import {makeStyles} from '@material-ui/core/styles';
import ITooltip from '../utils/ITooltip';
import {LangBaseJson, StringsJson} from '../../utils/types';
import ITypography from '../utils/ITypography';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(1),
        },
    }),
);

const strings: StringsJson = {
    iconTooltip: {
        en: 'Filter',
        fa: 'فیلتر',
    },
};
interface CentreTableToolbarProps {
    title: LangBaseJson;
}
const CentreTableToolbar = ({title}: CentreTableToolbarProps) => {
    const classes = useStyles();
    return (
        <Toolbar className={classes.root}>
            <ITypography text={title} />
            <ITooltip title={strings.iconTooltip}>
                <IconButton>
                    <FilterListIcon />
                </IconButton>
            </ITooltip>
        </Toolbar>
    );
};
export default CentreTableToolbar;
