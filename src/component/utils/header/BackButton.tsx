import React from 'react';
import {IconButton} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {useHistory} from 'react-router';
import {Strings} from '../../../utils/types';
import ITooltip from '../ITooltip';
import {useDirection} from '../../../utils/hooks';

const tooltipTitle: Strings = {
    en: 'Back',
    fa: 'بازگشت',
};

const BackButton = () => {
    const history = useHistory();
    const isRTL = useDirection();

    return (
        <ITooltip title={tooltipTitle}>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={history.goBack}>
                {isRTL ? <ArrowForwardIcon /> : <ArrowBackIcon />}
            </IconButton>
        </ITooltip>
    );
};
export default BackButton;
