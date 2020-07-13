import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import ITypography from '../ITypography';
import DrawerButton from './DrawerButton';
import LanguageSwitcherButton from './LanguageSwitcherButton';
import {Strings} from '../../../utils/types';

interface IHeaderProps {
    getTitle(): Strings;
}

const IHeader = ({getTitle}: IHeaderProps) => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <DrawerButton />
                <ITypography
                    text={getTitle()}
                    className="flex-grow-1 mr-2 ml-2"
                />
                <LanguageSwitcherButton />
            </Toolbar>
        </AppBar>
    );
};

export default IHeader;
