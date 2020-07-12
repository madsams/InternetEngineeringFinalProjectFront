import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import ITypography from '../ITypography';
import DrawerButton from './DrawerButton';
import LanguageSwitcherButton from './LanguageSwitcherButton';
import {Strings} from '../../../utils/types';
import {useLocation} from 'react-router-dom';

interface IHeaderProps {
    getTitle(location: string): Strings | undefined;
}

const IHeader = ({getTitle}: IHeaderProps) => {
    const location = useLocation();
    return (
        <AppBar position="sticky">
            <Toolbar>
                <DrawerButton />
                <ITypography
                    text={getTitle(location.pathname)}
                    className="flex-grow-1 mr-2 ml-2"
                />
                <LanguageSwitcherButton />
            </Toolbar>
        </AppBar>
    );
};

export default IHeader;
