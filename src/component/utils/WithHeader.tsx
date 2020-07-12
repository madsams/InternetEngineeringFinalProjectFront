import React from 'react';
import IHeader from './IHeader';
import {Strings} from '../../utils/types';

interface WithHeaderProps extends Strings {
    children: React.ReactNode;
}

const WithHeader = ({children, ...title}: WithHeaderProps) => {
    return (
        <>
            <IHeader title={title} />
            {children}
        </>
    );
};
export default WithHeader;
