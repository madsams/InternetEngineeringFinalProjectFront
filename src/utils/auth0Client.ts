import auth0, {WebAuth} from 'auth0-js';
import {getStorage, removeStorage, setStorage} from './effects/storage';

interface AuthType {
    auth0: WebAuth;
    profile: any;
    idToken: any;
    expiresAt: any;
}

class Auth implements AuthType {
    auth0: WebAuth;
    expiresAt: any;
    idToken: any;
    profile: any;

    constructor() {
        this.auth0 = new auth0.WebAuth({
            // the following three lines MUST be updated
            domain: 'ieng-final-project.eu.auth0.com',
            audience: 'https://ieng-final-project.eu.auth0.com/userinfo',
            clientID: 'itCUjipghPHaeGzOC72mj04evZCBDcns',
            scope: 'openid email profile',
            redirectUri: `${window.location.origin}/login`,
            responseType: 'id_token',
        });
        this.idToken = getStorage('token', undefined);
    }

    getProfile = () => {
        return this.profile;
    };

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
            this.auth0.authorize();
            this.auth0.parseHash((err, authResult) => {
                if (err) {
                    console.log('error1');
                    return reject(err);
                }
                if (!authResult || !authResult.idToken) {
                    return reject(err);
                }
                console.log(authResult);
                this.idToken = authResult.idToken;
                setStorage('token', authResult.idToken);
                this.profile = authResult.idTokenPayload;
                // set the time that the id token will expire at
                this.expiresAt = authResult.idTokenPayload.exp * 1000;
                resolve();
            });
        });
    };

    signOut = () => {
        // clear id token, profile, and expiration
        this.idToken = null;
        this.profile = null;
        this.expiresAt = null;
        removeStorage('token');
    };
}

const auth0Client = new Auth();

export default auth0Client;
