import {Button, makeStyles, PropTypes} from '@material-ui/core';
import React from 'react';
import ILoader from './ILoader';
import {LangBaseJson} from '../../utils/types';
import ITypography from './ITypography';

const useStyle = makeStyles({
    button: {
        maxWidth: 250,
    },
});

interface IButtonProps {
    isLoading: boolean;
    className?: string;
    color?: PropTypes.Color;
    title: LangBaseJson;

    onClick(...args: any): void;
}

const IButton = ({
    isLoading,
    onClick,
    className,
    color = 'primary',
    title,
}: IButtonProps) => {
    const classes = useStyle();
    //todo isLoading not working
    return (
        <Button
            color={color}
            variant="contained"
            className={
                'flex-1 m-1 mt-5 col-5 ' + classes.button + ' ' + className
            }
            onClick={onClick}>
            <ILoader isLoading={isLoading}>
                <ITypography text={title} />
            </ILoader>
        </Button>
    );
};

export default IButton;
