declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            REACT_APP_HOST: string;
            PUBLIC_URL: string;
            REACT_APP_GOOGLE_MAP_API_KEY: string;
            REACT_APP_MAP_IR_API_KEY: string;
        }
    }
}

export {};
/// <reference types="react-scripts" />
