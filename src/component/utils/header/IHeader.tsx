import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import ITypography from '../ITypography';
import DrawerButton from './DrawerButton';
import LanguageSwitcherButton from './LanguageSwitcherButton';
import {DrawerItem, LangBaseJson} from '../../../utils/types';

interface IHeaderProps {
    title: LangBaseJson;
    drawerList: Array<DrawerItem>;
    drawerVisible: boolean;
}

const IHeader = ({title, drawerList, drawerVisible}: IHeaderProps) => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                {drawerVisible && <DrawerButton list={drawerList} />}
                <ITypography text={title} className="flex-grow-1 mr-2 ml-2" />
                <LanguageSwitcherButton />
            </Toolbar>
        </AppBar>
    );
};

export default IHeader;
