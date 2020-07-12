import React from 'react';
import {Typography} from '@material-ui/core';
import {Language, Strings} from '../../utils/types';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {Variant} from '@material-ui/core/styles/createTypography';

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
    const language = useSelector<RootState, Language>(
        (state) => state.language,
    );
    return (
        <Typography
            component="p"
            style={style}
            className={className}
            color={color}
            variant={variant}>
            {text[language]}
        </Typography>
    );
};
export default ITypography;
