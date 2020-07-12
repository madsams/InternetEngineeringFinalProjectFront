import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import ITypography from '../ITypography';
import BackButton from './BackButton';
import LanguageSwitcherButton from './LanguageSwitcherButton';
import {Link} from 'react-router-dom';
import {Strings} from '../../../utils/types';

//todo
const forNow: Strings = {
    en: 'title',
    fa: 'title',
};
const IHeader = () => (
    <AppBar position="sticky">
        <Toolbar>
            <BackButton />
            <ITypography text={forNow} className="flex-grow-1 mr-2 ml-2" />
            <Link to="/login">Login</Link>
            <LanguageSwitcherButton />
        </Toolbar>
    </AppBar>
);

export default IHeader;
