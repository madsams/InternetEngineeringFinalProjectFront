import React from 'react';
import {Container} from '@material-ui/core';

interface IContainerProps {
    children: React.ReactElement;
}

const IContainer = ({children}: IContainerProps) => (
    <div className="flex-1 justify-content-center bg-light">
        <Container maxWidth="md" className="mt-4">
            {children}
        </Container>
    </div>
);
export default IContainer;
