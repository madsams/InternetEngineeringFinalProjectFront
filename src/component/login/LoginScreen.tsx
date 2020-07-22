import React from 'react';
import IContainer from '../utils/IContainer';
import ITypography from '../utils/ITypography';
import {Role, StringsJson} from '../../utils/types';
import {useDispatch} from 'react-redux';
import {login1} from './actions';
import IButton from '../utils/IButton';

const strings: StringsJson = {
    text: {
        en: 'You need to login first',
        fa: 'شما ابتدا باید وارد شوید',
    },
    buttonAsField: {
        en: 'Login as Field Agent',
        fa: 'ورود مامور میدانی',
    },
    buttonAsCentre: {
        en: 'Login as Centre Agent',
        fa: 'ورود مامور مرکزی',
    },
    button: {
        en: 'Login',
        fa: 'ورود',
    },
};
const LoginScreen = () => {
    const dispatch = useDispatch();
    const handleCentreLogin = () => {
        dispatch(login1(Role.centreAgent));
    };

    const handleFieldLogin = () => {
        dispatch(login1(Role.fieldAgent));
    };
    const handleLogin = () => {
        window.location.href = `${process.env.REACT_APP_HOST}/login`;
    };
    return (
        <IContainer className="d-flex flex-column justify-content-center align-items-center">
            <ITypography text={strings.text} variant="h6" className="mb-4" />
            <IButton
                title={strings.buttonAsCentre}
                onClick={handleCentreLogin}
            />
            <IButton title={strings.buttonAsField} onClick={handleFieldLogin} />
            <IButton title={strings.button} onClick={handleLogin} />
        </IContainer>
    );
};
export default LoginScreen;
