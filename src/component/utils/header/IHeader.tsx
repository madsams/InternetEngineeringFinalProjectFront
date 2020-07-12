import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import ITypography from '../ITypography';
import DrawerButton from './DrawerButton';
import LanguageSwitcherButton from './LanguageSwitcherButton';
import {Strings} from '../../../utils/types';

//todo
const forNow: Strings = {
    en: 'title',
    fa: 'title',
};
const IHeader = () => (
    <AppBar position="sticky">
        <Toolbar>
            <DrawerButton />
            <ITypography text={forNow} className="flex-grow-1 mr-2 ml-2" />
            <LanguageSwitcherButton />
        </Toolbar>
    </AppBar>
);

export default IHeader;
