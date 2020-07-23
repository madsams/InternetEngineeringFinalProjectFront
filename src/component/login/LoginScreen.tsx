import React, {useEffect} from 'react';
import IContainer from '../utils/IContainer';
import ITypography from '../utils/ITypography';
import {StringsJson} from '../../utils/types';
import {useDispatch, useSelector} from 'react-redux';
import {getRoles} from './actions';
import ILoadingChecker from '../utils/ILoadingChecker';
import IFailedChecker from '../utils/IFailedChecker';
import {RootState} from '../../store';
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
                    Logged in
                </IFailedChecker>
            </ILoadingChecker>

            <IButton
                title={strings.buttonAsField}
                onClick={() => {
                    window.location.href = `${process.env.REACT_APP_HOST}/login?returnTo=${window.location.origin}`;
                }}
            />
        </IContainer>
    );
};
export default LoginScreen;
