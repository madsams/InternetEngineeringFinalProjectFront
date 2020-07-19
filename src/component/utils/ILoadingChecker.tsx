import React from 'react';
import {CircularProgress} from '@material-ui/core';

interface ILoaderProps {
    isLoading: boolean;
    children: React.ReactNode;
}

const ILoadingChecker = ({children, isLoading}: ILoaderProps) =>
    isLoading ? (
        <div className="d-flex align-items-center justify-content-center">
            <CircularProgress size={25} />
        </div>
    ) : (
        <React.Fragment>{children}</React.Fragment>
    );
export default ILoadingChecker;
