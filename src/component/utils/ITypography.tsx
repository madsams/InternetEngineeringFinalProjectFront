import React from 'react';
import {Typography} from '@material-ui/core';
import {Strings} from '../../utils/types';
import {Variant} from '@material-ui/core/styles/createTypography';
import {useLanguage} from '../../utils/hooks';

interface ITextProps {
    text: Strings;
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
}

const ITypography = ({text, className, style, color, variant}: ITextProps) => {
    const iText = useLanguage(text);
    return (
        <Typography
            component="p"
            style={style}
            className={className}
            color={color}
            variant={variant}>
            {iText}
        </Typography>
    );
};
export default ITypography;
