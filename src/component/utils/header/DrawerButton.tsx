import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ITooltip from '../ITooltip';
import ITypography from '../ITypography';
import {DrawerItem} from '../../../utils/types';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    drawer: {
        width: 250,
    },
});

interface DrawerButtonProps {
    list: Array<DrawerItem>;
}

const DrawerButton = ({list}: DrawerButtonProps) => {
    const classes = useStyles();
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

    const drawerList = () => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className={classes.drawer}>
            <List>
                {list
                    .filter((i) => !i.hideInDrawer)
                    .map((item) => (
                        <ListItem
                            button
                            key={item.path}
                            component="a"
                            href={item.path}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>
                                <ITypography text={item.title} align="left" />
                            </ListItemText>
                        </ListItem>
                    ))}
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
                {drawerList()}
            </Drawer>
        </>
    );
};
export default DrawerButton;
