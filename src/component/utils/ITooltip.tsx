import {useLanguage} from '../../utils/hooks';
import {Tooltip} from '@material-ui/core';
import React from 'react';
import {Strings} from '../../utils/types';

interface ITooltipProps {
    title: Strings;
    children: React.ReactElement;
}

const ITooltip = ({title, children}: ITooltipProps) => {
    const iTitle = useLanguage(title);

    return (
        <Tooltip title={iTitle} arrow>
            {children}
        </Tooltip>
    );
};
export default ITooltip;
