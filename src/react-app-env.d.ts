declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            REACT_APP_HOST: string;
            PUBLIC_URL: string;
        }
    }
}

export {};
/// <reference types="react-scripts" />
