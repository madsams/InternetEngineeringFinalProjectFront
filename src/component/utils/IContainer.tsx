import React from 'react';
import {Container} from '@material-ui/core';

interface IContainerProps {
    children: React.ReactElement | React.ReactNodeArray;
    className?: string;
}

const IContainer = ({children, className}: IContainerProps) => (
    <div className="flex-1 justify-content-center bg-light">
        <Container maxWidth="xl" className={'mt-4 ' + className}>
            {children}
        </Container>
    </div>
);
export default IContainer;
