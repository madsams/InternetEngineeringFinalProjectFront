import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import ITypography from '../ITypography';
import {Strings} from '../../../utils/types';
import BackButton from './BackButton';
import LanguageSwitcherButton from './LanguageSwitcherButton';

interface Props {
    title: Strings;
}

const IHeader = ({title}: Props) => (
    <AppBar position="sticky">
        <Toolbar>
            <BackButton />
            <ITypography text={title} className="flex-grow-1 mr-1 ml-1" />
            <LanguageSwitcherButton />
        </Toolbar>
    </AppBar>
);

export default IHeader;
