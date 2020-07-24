import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {getRoles} from './actions';
import ILoadingChecker from '../utils/ILoadingChecker';
import IFailedChecker from '../utils/IFailedChecker';
import {Role, StringsJson} from '../../utils/types';
import IButton from '../utils/IButton';
import {setRole} from '../../utils/actions/actions';
import IContainer from '../utils/IContainer';
import ITypography from '../utils/ITypography';

const strings: StringsJson = {
    buttonAsField: {
        en: 'Field Agent',
        fa: 'عامل میدانی',
    },
    buttonAsCentre: {
        en: 'Centre Agent',
        fa: 'عامل مرکزی',
    },
    chooseYourRole: {
        en: 'Choose your role',
        fa: 'عنوان خود را انتخاب کنید',
    },
    rolelessError: {
        en: 'No role set for your account',
        fa: 'عنوانی برای حساب شما ثبت نشده است',
    },
    rolelessErrorSubtitle: {
        en: 'Call the System Administrator',
        fa: 'با ادمین سیستم تماس بگیرید',
    },
};
const SetRole = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector<RootState, boolean>(
        (state) => state.login.rolesOfUser.isLoading,
    );
    const isFailed = useSelector<RootState, boolean>(
        (state) => state.login.rolesOfUser.isFailed,
    );
    const roles = useSelector<RootState, {name: string}[]>(
        (state) => state.login.rolesOfUser.data,
    );

    useEffect(() => {
        dispatch(getRoles());
    }, [dispatch]);

    useEffect(() => {
        if (roles.length === 1) {
            const role = roles[0];
            if (role.name.includes('Centre')) {
                dispatch(setRole(Role.centreAgent));
            } else {
                dispatch(setRole(Role.centreAgent));
            }
        }
    }, [roles, dispatch]);

    const handleCentreLogin = () => {
        dispatch(setRole(Role.centreAgent));
    };

    const handleFieldLogin = () => {
        dispatch(setRole(Role.fieldAgent));
    };
    return (
        <IContainer>
            <ILoadingChecker isLoading={isLoading}>
                <IFailedChecker isFailed={isFailed} reloadAction={getRoles}>
                    <div className="d-flex flex-column align-items-center">
                        {roles.length === 0 ? (
                            <>
                                <ITypography text={strings.rolelessError} />
                                <ITypography
                                    text={strings.rolelessErrorSubtitle}
                                    variant="subtitle1"
                                />
                            </>
                        ) : roles.length === 2 ? (
                            <>
                                <ITypography text={strings.chooseYourRole} />
                                <IButton
                                    title={strings.buttonAsCentre}
                                    onClick={handleCentreLogin}
                                />
                                <IButton
                                    title={strings.buttonAsField}
                                    onClick={handleFieldLogin}
                                />
                            </>
                        ) : null}
                    </div>
                </IFailedChecker>
            </ILoadingChecker>
        </IContainer>
    );
};
export default SetRole;
