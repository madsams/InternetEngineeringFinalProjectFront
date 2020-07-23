import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {getRoles} from './actions';
import ILoadingChecker from '../utils/ILoadingChecker';
import IFailedChecker from '../utils/IFailedChecker';
import {Role, StringsJson} from '../../utils/types';
import IButton from '../utils/IButton';
import {setRole} from '../../utils/actions/actions';

const strings: StringsJson = {
    buttonAsField: {
        en: 'Login as Field Agent',
        fa: 'ورود مامور میدانی',
    },
    buttonAsCentre: {
        en: 'Login as Centre Agent',
        fa: 'ورود مامور مرکزی',
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
    const roles = useSelector<RootState, Role[]>(
        (state) => state.login.rolesOfUser.data,
    );

    useEffect(() => {
        dispatch(getRoles());
    }, [dispatch]);

    const handleCentreLogin = () => {
        dispatch(setRole(Role.centreAgent));
    };

    const handleFieldLogin = () => {
        dispatch(setRole(Role.fieldAgent));
    };
    return (
        <ILoadingChecker isLoading={isLoading}>
            {/*todo*/}
            <IFailedChecker
                isFailed={false && isFailed}
                reloadAction={getRoles}>
                <IButton
                    title={strings.buttonAsCentre}
                    onClick={handleCentreLogin}
                />
                <IButton
                    title={strings.buttonAsField}
                    onClick={handleFieldLogin}
                />
            </IFailedChecker>
        </ILoadingChecker>
    );
};
export default SetRole;
