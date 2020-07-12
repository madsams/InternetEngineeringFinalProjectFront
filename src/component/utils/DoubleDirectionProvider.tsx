import {
    createMuiTheme,
    CssBaseline,
    jssPreset,
    StylesProvider,
    ThemeProvider,
} from '@material-ui/core';
import ReduxToastr from 'react-redux-toastr';
import React, {useEffect, useState} from 'react';
import {red} from '@material-ui/core/colors';
import {create} from 'jss';
import rtl from 'jss-rtl';
import {useSelector} from 'react-redux';
import {Language} from '../../utils/types';
import {RootState} from '../../store';

const palette = {
    primary: {
        main: '#556cd6',
    },
    secondary: {
        main: '#19857b',
    },
    error: {
        main: red.A400,
    },
    background: {
        default: '#fff',
    },
    text: {
        primary: '#222',
        secondary: '#777',
    },
};
const rtlTheme = createMuiTheme({
    direction: 'rtl',
    palette,
});
const ltrTheme = createMuiTheme({
    palette,
});

const rtlJss = create({plugins: [...jssPreset().plugins, rtl()]});

interface IThemeProviderProps {
    children: React.ReactNode;
}

const rtlLanguages = ['fa', 'ar'];

const DoubleDirectionProvider = ({children}: IThemeProviderProps) => {
    const language = useSelector<RootState, Language>(
        (state) => state.language,
    );
    const [isRTL, setIsRTL] = useState<boolean>(false);

    useEffect(() => {
        const html = document.getElementsByTagName('html')[0];
        html.lang = language;
        setIsRTL(rtlLanguages.includes(language));
    }, [language]);

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];

        const changeElement = (dir: string) => (body.dir = dir);

        if (isRTL) changeElement('rtl');
        else changeElement('ltr');
    }, [isRTL]);

    return (
        <ThemeProvider theme={isRTL ? rtlTheme : ltrTheme}>
            <CssBaseline />
            <ReduxToastr
                timeOut={3000}
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                closeOnToastrClick
            />
            {isRTL ? (
                <StylesProvider jss={rtlJss}>{children}</StylesProvider>
            ) : (
                children
            )}
        </ThemeProvider>
    );
};
export default DoubleDirectionProvider;
