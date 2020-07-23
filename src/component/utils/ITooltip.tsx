import {useLanguage} from '../../utils/hooks';
import {Tooltip} from '@material-ui/core';
import React from 'react';
import {LangBaseJson} from '../../utils/types';

interface ITooltipProps {
    children: React.ReactElement;
    title: LangBaseJson;
}

const ITooltip = ({children, title}: ITooltipProps) => {
    const iTitle = useLanguage(title);

    return (
        <Tooltip title={iTitle || ''} arrow>
            {children}
        </Tooltip>
    );
};
export default ITooltip;
