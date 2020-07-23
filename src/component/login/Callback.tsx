import ILoadingChecker from '../utils/ILoadingChecker';
import React, {useEffect} from 'react';
import auth0Client from '../../utils/auth0Client';
import {useHistory} from 'react-router-dom';
import {SET_ROLE} from './paths';

const Callback = () => {
    const history = useHistory();
    useEffect(() => {
        auth0Client
            .handleAuthentication()
            .then(() => {
                history.replace(SET_ROLE);
            })
            .catch(() => auth0Client.signOut());
    });
    return <ILoadingChecker isLoading={true}>Loading</ILoadingChecker>;
};
export default Callback;
