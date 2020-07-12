import {useLanguage} from '../../utils/hooks';
import {Tooltip} from '@material-ui/core';
import React from 'react';
import {Strings} from '../../utils/types';

interface ITooltipProps extends Strings {
    children: React.ReactElement;
}

const ITooltip = ({children, ...title}: ITooltipProps) => {
    const iTitle = useLanguage(title);

    return (
        <Tooltip title={iTitle} arrow>
            {children}
        </Tooltip>
    );
};
export default ITooltip;
