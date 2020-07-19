import React from 'react';
import IContainer from '../utils/IContainer';
import ITypography from '../utils/ITypography';
import {Role, StringsJson} from '../../utils/types';
import {useDispatch} from 'react-redux';
import {login} from './actions';
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
};
const LoginScreen = () => {
    const dispatch = useDispatch();
    const handleCentreLogin = () => {
        dispatch(login(Role.centreAgent));
    };

    const handleFieldLogin = async () => {
        dispatch(login(Role.fieldAgent));
    };
    return (
        <IContainer className="d-flex flex-column justify-content-center align-items-center">
            <ITypography text={strings.text} variant="h6" className="mb-4" />
            <IButton
                title={strings.buttonAsCentre}
                onClick={handleCentreLogin}
            />
            <IButton title={strings.buttonAsField} onClick={handleFieldLogin} />
        </IContainer>
    );
};
export default LoginScreen;
