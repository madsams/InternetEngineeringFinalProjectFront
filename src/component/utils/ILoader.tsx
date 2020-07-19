import React from 'react';
import {CircularProgress} from '@material-ui/core';

interface ILoaderProps {
    isLoading: boolean;
    children: React.ReactNode;
}

const ILoader = ({children, isLoading}: ILoaderProps) =>
    isLoading ? (
        <div className="d-flex align-items-center justify-content-center">
            <CircularProgress />
        </div>
    ) : (
        <React.Fragment>{children}</React.Fragment>
    );
export default ILoader;
