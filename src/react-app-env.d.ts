declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            REACT_APP_HOST: string;
            PUBLIC_URL: string;
            REACT_APP_GOOGLE_MAP_API_KEY: string;
            REACT_APP_AUTH0_DOMAIN: string;
            REACT_APP_AUTH0_CLIENT_ID: string;
        }
    }
}

export {};
/// <reference types="react-scripts" />
