import React from 'react';
import {IconButton} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from 'react-router';
import {Strings} from '../../../utils/types';
import ITooltip from '../ITooltip';

const tooltipTitle: Strings = {
    en: 'Back',
    fa: 'بازگشت',
};

const BackButton = () => {
    const history = useHistory();

    return (
        <ITooltip title={tooltipTitle}>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={history.goBack}>
                <ArrowBackIcon />
            </IconButton>
        </ITooltip>
    );
};
export default BackButton;
