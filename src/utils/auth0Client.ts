import auth0, {Auth0DecodedHash, WebAuth} from 'auth0-js';
import {getStorage, removeStorage, setStorage} from './effects/storage';
import {roleStorageKey, tokenExpiresStorageKey, tokenStorageKey} from './types';

interface AuthType {
    auth0: WebAuth;
    idToken: any;
    expiresAt: any;
}

class Auth implements AuthType {
    auth0: WebAuth;
    expiresAt: any;
    idToken: any;

    constructor() {
        this.auth0 = new auth0.WebAuth({
            // the following three lines MUST be updated
            domain: 'ieng-final-project.eu.auth0.com',
            audience: 'https://ieng-final-project.eu.auth0.com/userinfo',
            clientID: 'itCUjipghPHaeGzOC72mj04evZCBDcns',
            redirectUri: `${window.location.origin}/callback`,
            responseType: 'id_token',
            scope: 'openid profile',
        });
        this.idToken = getStorage(tokenStorageKey, '');
        this.expiresAt = getStorage(tokenExpiresStorageKey, '');
    }

    getIdToken = () => {
        if (this.idToken) return this.idToken;
    };

    isAuthenticated = () => {
        return new Date().getTime() < this.expiresAt;
    };

    signIn = () => {
        this.auth0.authorize();
    };

    handleAuthentication = () => {
        return new Promise((resolve, reject) => {
            if (this.idToken) resolve(this.idToken);

            this.auth0.parseHash((err, authResult) => {
                if (err) {
                    return reject(err);
                }
                if (!authResult || !authResult.idToken) {
                    return reject(err);
                }
                this.setSession(authResult);
                resolve();
            });
        });
    };

    setSession = (authResult: Auth0DecodedHash) => {
        this.idToken = authResult.idToken;
        this.expiresAt = authResult.idTokenPayload.exp * 1000;
        setStorage(tokenStorageKey, this.idToken);
        setStorage(tokenExpiresStorageKey, this.expiresAt);
    };

    signOut = () => {
        this.auth0.logout({
            returnTo: window.location.origin,
            clientID: 'itCUjipghPHaeGzOC72mj04evZCBDcns',
        });
        removeStorage(tokenStorageKey);
        removeStorage(tokenExpiresStorageKey);
        removeStorage(roleStorageKey);
    };

    silentAuth = () => {
        return new Promise((resolve) => {
            this.auth0.checkSession({}, (err, authResult) => {
                if (err) this.signIn();
                this.setSession(authResult);
                resolve();
            });
        });
    };
}

const auth0Client = new Auth();

export default auth0Client;
