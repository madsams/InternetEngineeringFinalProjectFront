import React, {useState} from 'react';
import {IconButton, Menu, MenuItem} from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import {Language} from '../../../utils/types';
import ITooltip from '../ITooltip';
import {useDispatch} from 'react-redux';
import {changeLanguage} from '../../../utils/actions/languagesAction';

const LanguageSwitcherButton = () => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);

    const handleChangeLang = (lang: Language) => {
        handleClose();
        dispatch(changeLanguage(lang));
    };

    return (
        <>
            <ITooltip en="Change Language" fa="تغییر زبان">
                <IconButton
                    color="inherit"
                    aria-label="lang"
                    onClick={handleMenu}>
                    <LanguageIcon />
                </IconButton>
            </ITooltip>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}>
                {Object.values(Language).map((key: Language) => (
                    <MenuItem key={key} onClick={() => handleChangeLang(key)}>
                        {key}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};
export default LanguageSwitcherButton;
