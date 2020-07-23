import {Button, makeStyles, PropTypes} from '@material-ui/core';
import React from 'react';
import ILoadingChecker from './ILoadingChecker';
import {LangBaseJson} from '../../utils/types';
import ITypography from './ITypography';

const useStyle = makeStyles({
    button: {
        maxWidth: 250,
        textTransform: 'none',
    },
});

interface IButtonProps {
    isLoading?: boolean;
    className?: string;
    color?: PropTypes.Color;
    title: LangBaseJson;

    onClick(...args: any): void;
}

const IButton = ({
    isLoading = false,
    onClick,
    className,
    color = 'primary',
    title,
}: IButtonProps) => {
    const classes = useStyle();
    return (
        <Button
            color={color}
            variant="contained"
            className={
                'flex-1 m-1 mt-5 col-5 ' + classes.button + ' ' + className
            }
            disabled={isLoading}
            onClick={onClick}>
            <ILoadingChecker isLoading={isLoading}>
                <ITypography text={title} />
            </ILoadingChecker>
        </Button>
    );
};

export default IButton;
