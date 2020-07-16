import Axios, {AxiosError, AxiosResponse, Method as AxiosMethods} from 'axios';
import renderToast, {ToastTypes} from './renderToast';
import {IActionCreator, IThunkAction, LangBaseJson} from '../types';

const instance = Axios.create({
    baseURL: process.env.REACT_APP_HOST,
    timeout: 7000,
    params: {},
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use(async (request) => {
    console.log('>>>>>>>>>>>>', request);
    return Promise.resolve(request);
});

instance.interceptors.response.use(
    (response) => {
        console.log('<<<<<<<<<<<', response);
        return Promise.resolve(response);
    },
    async (error) => {
        console.log(
            '<<<<<<error<<<<<',
            error.response ? {...error.response} : {...error},
        ); //cancel and network error have no response
        return Promise.reject(error);
    },
);

export interface ErrorCodesType {
    code: number;
    toastMessage?: LangBaseJson;

    action(error?: AxiosError): void;
}

export interface RequestOptionType {
    method: AxiosMethods;
    data?: any;
    params?: object;
    url: string;
    timeout?: number;
    headers?: object;
    toastTitle?: LangBaseJson;
    successToastMessage?: LangBaseJson;
    failToastMessage?: LangBaseJson;
    errorCodes?: Array<ErrorCodesType>;
    successAction: IActionCreator;
    errorAction: IActionCreator;
    pendingAction: IActionCreator;

    callback?(): void;

    resolve?(response?: AxiosResponse): () => void;

    reject?(error?: AxiosError): () => void;
}

interface ResponseType {
    data: object | Array<any>;
    message: string;
}

const request = (requestOption: RequestOptionType): IThunkAction => async (
    dispatch,
) => {
    const {
        method,
        data,
        params = {},
        url,
        timeout = 7 * 1000,
        headers,
        toastTitle = {en: '', fa: ''},
        successToastMessage,
        failToastMessage = {
            en: 'Please check your connection',
            fa: 'لطفا اتصال خود را بررسی کنید',
        },
        errorCodes = [],
        resolve,
        reject,
        pendingAction,
        errorAction,
        successAction,
        callback,
    } = requestOption;

    // Start loading
    if (pendingAction) dispatch(pendingAction());

    try {
        // Calls "url" by "method" with "data" as body and "headers" and params
        const response = await instance.request<ResponseType>({
            url,
            method,
            headers,
            data,
            timeout,
            params,
        });

        // If axios call was successful
        if (resolve) resolve(response);
        if (successAction) dispatch(successAction(response.data.data));
        if (successToastMessage)
            dispatch(
                renderToast(
                    toastTitle,
                    successToastMessage,
                    ToastTypes.SUCCESS,
                ),
            );
    } catch (error) {
        // Component unmounted and axios unsubscribed
        const isCancelError = !error.config;
        // Cross-Origin error
        const isCorsError = !error.response;
        // Econnaborted because of connection lost or vpn
        const isEconnabortedError = error.code === 'ECONNABORTED';

        if (isEconnabortedError) {
            if (errorAction) dispatch(errorAction(failToastMessage));
        } else if (!isCancelError) {
            // Error codes are
            let errorCodeActioned = false;

            if (!isCorsError) {
                const code = error.response.status;

                errorCodes.forEach((errorCode) => {
                    if (code === errorCode.code && !errorCodeActioned) {
                        if (errorCode.toastMessage)
                            dispatch(
                                renderToast(
                                    toastTitle,
                                    errorCode.toastMessage,
                                    ToastTypes.ERROR,
                                ),
                            );
                        if (errorCode.action) errorCode.action(error);
                        errorCodeActioned = true;
                    }
                });
            }

            if (!errorCodeActioned) {
                if (!reject) {
                    if (errorAction) dispatch(errorAction(failToastMessage));
                    dispatch(
                        renderToast(
                            toastTitle,
                            failToastMessage,
                            ToastTypes.ERROR,
                        ),
                    );
                } else {
                    reject(error);
                }
            }
        }
    }
    if (callback) callback();
};
export default request;
