import React from 'react';
import {Typography} from '@material-ui/core';
import {LangBaseJson} from '../../utils/types';
import {Variant} from '@material-ui/core/styles/createTypography';
import {useLanguage} from '../../utils/hooks';

interface ITextProps {
    text: LangBaseJson | undefined;
    className?: string;
    style?: React.CSSProperties;
    color?:
        | 'initial'
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'textPrimary'
        | 'textSecondary'
        | 'error';
    variant?: Variant | 'inherit';
    align?: 'right' | 'left' | 'center';
}

const ITypography = ({
    text,
    className,
    style,
    color,
    variant,
    align = 'left',
}: ITextProps) => {
    const iText = useLanguage(text);
    return (
        <Typography
            component="p"
            style={style}
            className={className}
            align={align}
            color={color}
            variant={variant}>
            {iText}
        </Typography>
    );
};
export default ITypography;
