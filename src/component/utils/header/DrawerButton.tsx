import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ITooltip from '../ITooltip';

export default function TemporaryDrawer() {
    const [open, setOpen] = useState<boolean>(false);
    const toggleDrawer = (value: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setOpen(value);
    };

    const list = () => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                    (text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ),
                )}
            </List>
        </div>
    );

    return (
        <>
            <ITooltip en={'Menu'} fa={'منو'}>
                <IconButton
                    color="inherit"
                    aria-label="lang"
                    onClick={toggleDrawer(true)}>
                    <MenuIcon color={'inherit'} />
                </IconButton>
            </ITooltip>
            <Drawer anchor={'left'} open={open} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </>
    );
}
