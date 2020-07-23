import React from 'react';
import IContainer from '../utils/IContainer';
import ITypography from '../utils/ITypography';
import {StringsJson} from '../../utils/types';
import IButton from '../utils/IButton';
import auth0Client from '../../utils/auth0Client';
import {useHistory} from 'react-router';
import {SET_ROLE} from './paths';

const strings: StringsJson = {
    text: {
        en: 'You need to login first',
        fa: 'لطفا لاگین کنید',
    },
    button: {
        en: 'Login',
        fa: 'ورود',
    },
};
const LoginScreen = () => {
    const history = useHistory();

    const handleClick = () => {
        if (!auth0Client.isAuthenticated()) {
            auth0Client.silentAuth();
        } else {
            history.replace(SET_ROLE);
        }
    };

    return (
        <IContainer className="d-flex flex-column justify-content-center align-items-center">
            <ITypography text={strings.text} variant="h4" className="mb-4" />

            <IButton title={strings.button} onClick={handleClick} />
        </IContainer>
    );
};
export default LoginScreen;
