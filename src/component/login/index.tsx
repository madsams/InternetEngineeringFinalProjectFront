import React from 'react';
import IContainer from '../utils/IContainer';
import {Button} from '@material-ui/core';
import ITypography from '../utils/ITypography';
import {StringsJson} from '../../utils/types';
import {useAuth0} from '@auth0/auth0-react';
import {useDispatch} from 'react-redux';
import {login} from './actions';

const strings: StringsJson = {
    text: {
        en: 'You need to login first',
        fa: 'شما ابتدا باید وارد شوید',
    },
    button: {
        en: 'Login',
        fa: 'ورود',
    },
};
const Login = () => {
    const {
        loginWithPopup,
        isAuthenticated,
        user,
        getAccessTokenSilently,
    } = useAuth0();
    const dispatch = useDispatch();
    const handleLogin = () => {
        /*
        if (!isAuthenticated)
            loginWithPopup()
                .then((r) => console.log('r', user))
                .catch((e) => console.log('e', e));
        else console.log('r', user);
*/
        dispatch(login());
    };
    return (
        <IContainer className="d-flex flex-column justify-content-center align-items-center">
            <ITypography text={strings.text} variant="h6" className="mb-4" />
            <Button onClick={handleLogin} color="primary" variant="contained">
                <ITypography text={strings.button} />
            </Button>
        </IContainer>
    );
};
export default Login;
