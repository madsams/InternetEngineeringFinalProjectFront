import React, {useEffect} from 'react';
import IContainer from '../utils/IContainer';
import ITypography from '../utils/ITypography';
import {StringsJson} from '../../utils/types';
import {useDispatch, useSelector} from 'react-redux';
import {getRoles} from './actions';
import ILoadingChecker from '../utils/ILoadingChecker';
import IFailedChecker from '../utils/IFailedChecker';
import {RootState} from '../../store';

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
    /*const handleCentreLogin = () => {
        dispatch(login1(Role.centreAgent));
    };

    const handleFieldLogin = () => {
        dispatch(login1(Role.fieldAgent));
    };
    const handleLogin = () => {
        window.location.href = `${process.env.REACT_APP_HOST}/login`;
    };*/

    const isLoading = useSelector<RootState, boolean>(
        (state) => state.login.rolesOfUser.isLoading,
    );
    const isFailed = useSelector<RootState, boolean>(
        (state) => state.login.rolesOfUser.isFailed,
    );

    useEffect(() => {
        dispatch(getRoles());
    }, [dispatch]);
    return (
        <IContainer className="d-flex flex-column justify-content-center align-items-center">
            <ITypography text={strings.text} variant="h6" className="mb-4" />
            <ILoadingChecker isLoading={isLoading}>
                <IFailedChecker isFailed={isFailed} reloadAction={getRoles}>
                    Logged iin
                </IFailedChecker>
            </ILoadingChecker>
            {/*
            <IButton
                title={strings.buttonAsCentre}
                onClick={handleCentreLogin}
            />
            <IButton title={strings.buttonAsField} onClick={handleFieldLogin} />
*/}
        </IContainer>
    );
};
export default LoginScreen;
