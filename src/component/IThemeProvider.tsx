import {createMuiTheme, CssBaseline, jssPreset, StylesProvider, ThemeProvider} from "@material-ui/core";
import ReduxToastr from "react-redux-toastr";
import React from "react";
import {red} from "@material-ui/core/colors";
import {create} from "jss";
import rtl from "jss-rtl";


const rtlTheme = createMuiTheme({
    direction: 'rtl',
    palette: {
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
    },
});
const ltrTheme = createMuiTheme({
    palette: {
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
    },
});

const rtlJss = create({plugins: [...jssPreset().plugins, rtl()]});

interface IThemeProviderProps {
    children: React.ReactNode
}

const IThemeProvider = ({children}: IThemeProviderProps) => {
    const isRTL = document.getElementsByTagName('body')[0].dir === 'rtl';

    return (
        <ThemeProvider theme={isRTL ? rtlTheme : ltrTheme}>
            <CssBaseline/>
            <ReduxToastr
                timeOut={3000}
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                closeOnToastrClick
            />
            {isRTL ?
                <StylesProvider jss={rtlJss}>
                    {children}
                </StylesProvider> :
                children
            }
        </ThemeProvider>)
};
export default IThemeProvider
