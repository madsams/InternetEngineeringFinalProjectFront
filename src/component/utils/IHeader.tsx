import React from 'react';
import {AppBar, IconButton, Toolbar} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from 'react-router-dom';
import ITypography from './ITypography';
import {Strings} from '../../utils/types';

interface Props {
    title: Strings;
}

const IHeader = ({title}: Props) => {
    const history = useHistory();

    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={history.goBack}>
                    <ArrowBackIcon />
                </IconButton>

                <ITypography text={title} />
            </Toolbar>
        </AppBar>
    );
};

export default IHeader;
