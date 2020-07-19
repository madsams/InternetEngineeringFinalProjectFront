import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import {IconButton} from '@material-ui/core';
import {ISimpleAction, IThunkAction} from '../../utils/types';
import {useDispatch} from 'react-redux';

interface IFailedCheckerProps {
    isFailed: boolean;
    children: React.ReactNode;

    reloadAction(): IThunkAction | ISimpleAction;
}

const IFailedChecker = ({
    children,
    isFailed,
    reloadAction,
}: IFailedCheckerProps) => {
    const dispatch = useDispatch();
    const handleClick = () => dispatch(reloadAction());
    return isFailed ? (
        <div className="d-flex align-items-center justify-content-center">
            <IconButton
                color="primary"
                className="p-0"
                onClick={handleClick}
                disableFocusRipple>
                <ReplayIcon />
            </IconButton>
        </div>
    ) : (
        <React.Fragment>{children}</React.Fragment>
    );
};
export default IFailedChecker;
