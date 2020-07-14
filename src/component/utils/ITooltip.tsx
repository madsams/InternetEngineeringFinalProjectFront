import {useLanguage} from '../../utils/hooks';
import {Tooltip} from '@material-ui/core';
import React from 'react';
import {LangBaseJson} from '../../utils/types';

interface ITooltipProps extends LangBaseJson {
    children: React.ReactElement;
}

const ITooltip = ({children, ...title}: ITooltipProps) => {
    const iTitle = useLanguage(title);

    return (
        <Tooltip title={iTitle || ''} arrow>
            {children}
        </Tooltip>
    );
};
export default ITooltip;
