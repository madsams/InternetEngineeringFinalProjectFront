import {
    _ERROR,
    _PENDING,
    _SUCCESS,
    ID,
    IDataAction,
    ISimpleAction,
    IThunkAction,
} from './types';
import {Action, Reducer} from 'redux';
import request, {RequestOptionType, RequestResponse} from './effects/request';
import {IdApi, SimpleApi} from './api';

// ----------------- Reducers ----------------

export interface RequestReducer {
    isLoading: boolean;
    isFailed: boolean;
}

const initialRequestState = (): RequestReducer => ({
    isLoading: false,
    isFailed: false,
});

export const createRequestReducer = (
    typePrefix: string,
): Reducer<RequestReducer, ISimpleAction> => (
    state = initialRequestState(),
    action,
) => {
    switch (action.type) {
        case typePrefix + _PENDING:
            return {...state, isFailed: false, isLoading: true};
        case typePrefix + _ERROR:
            return {...state, isFailed: true, isLoading: false};
        case typePrefix + _SUCCESS:
            return {...state, isFailed: false, isLoading: false};
        default:
            return state;
    }
};

export interface DataRequestReducer<D> extends RequestReducer {
    data: D;
}

const initialDataRequestState = <D>(data: D): DataRequestReducer<D> => ({
    isLoading: false,
    isFailed: false,
    data,
});

export const createDataRequestReducer = <SD>(
    typePrefix: string,
    initialData: SD,
    isRefreshInError = false,
): Reducer<DataRequestReducer<SD>, IDataAction<SD>> => (
    state = initialDataRequestState(initialData),
    action,
) => {
    switch (action.type) {
        case typePrefix + _PENDING:
            return {...state, isFailed: false, isLoading: true};
        case typePrefix + _ERROR:
            if (isRefreshInError)
                return {
                    ...state,
                    isLoading: false,
                    isFailed: true,
                    data: initialData,
                };
            else return {...state, isFailed: true, isLoading: false};
        case typePrefix + _SUCCESS:
            return {
                ...state,
                isLoading: false,
                isFailed: false,
                data: action.payload,
            };
        default:
            return state;
    }
};

// ----------------- Get Requests ----------------

type GetRequestSimpleAction = (callback?: () => void) => IThunkAction;
type GetRequestWithParamsAction<P> = (
    params: P,
    callback?: () => void,
) => IThunkAction;
type GetRequestWithIdAction = (id: ID, callback?: () => void) => IThunkAction;
type GetRequestWithIdAndParamsAction<P> = (
    id: ID,
    params: P,
    callback?: () => void,
) => IThunkAction;

type GetRequestActionsType<P extends object | undefined> = (
    id: ID | undefined,
    params: P,
    callback?: () => void,
) => IThunkAction;

const createGetRequestActions = <SD, P extends object | undefined>(
    actionType: string,
    url: SimpleApi | IdApi,
    getData = (data: any) => data,
): GetRequestActionsType<P> => {
    const PENDING = actionType + _PENDING;
    const SUCCESS = actionType + _SUCCESS;
    const ERROR = actionType + _ERROR;

    interface PendingAction extends Action<typeof PENDING> {}

    interface SuccessAction extends Action<typeof SUCCESS> {
        payload: SD;
    }

    interface ErrorAction extends Action<typeof ERROR> {}

    const pending = (): PendingAction => ({
        type: PENDING,
    });
    const error = (): ErrorAction => ({
        type: ERROR,
    });
    const success = (data: any): SuccessAction => ({
        type: SUCCESS,
        payload: getData(data),
    });

    return (id, params, callback): IThunkAction => (dispatch) => {
        if (typeof url !== 'string') url = url(id as ID);
        const requestOption: RequestOptionType = {
            url,
            params,
            method: 'GET',
            callback,
            errorAction: error,
            pendingAction: pending,
            successAction: success,
        };

        if (params) requestOption.params = params;

        dispatch(request(requestOption));
    };
};

export const createGetRequestSimpleActions = <SD>(
    actionType: string,
    url: SimpleApi,
    getData?: (data: any) => SD,
): GetRequestSimpleAction => (callback) =>
    createGetRequestActions<SD, undefined>(actionType, url, getData)(
        undefined,
        undefined,
        callback,
    );
export const createGetRequestWithParamsActions = <SD, P extends object>(
    actionType: string,
    url: SimpleApi,
    getData?: (data: any) => SD,
): GetRequestWithParamsAction<P> => (params, callback) =>
    createGetRequestActions<SD, P>(actionType, url, getData)(
        undefined,
        params,
        callback,
    );
export const createGetRequestWithIdActions = <SD>(
    actionType: string,
    url: IdApi,
    getData?: (data: any) => SD,
): GetRequestWithIdAction => (id, callback) =>
    createGetRequestActions<SD, undefined>(actionType, url, getData)(
        id,
        undefined,
        callback,
    );

export const GetRequestWithIdAndParamsAction = <SD, P extends object>(
    actionType: string,
    url: IdApi,
    getData?: (data: any) => SD,
): GetRequestWithIdAndParamsAction<P> => (id, params, callback) =>
    createGetRequestActions<SD, P>(actionType, url, getData)(
        id,
        params,
        callback,
    );

// ----------------- Post Requests ----------------

type PostRequestAction<D> = (
    data: D,
    id: ID,
    callback?: () => void,
    resolve?: (res?: RequestResponse) => void,
) => IThunkAction;

export const createPostRequestWithIdActions = <D>(
    actionType: string,
    url: IdApi,
): PostRequestAction<D> => {
    const PENDING = actionType + _PENDING;
    const SUCCESS = actionType + _SUCCESS;
    const ERROR = actionType + _ERROR;

    interface PendingAction extends Action<typeof PENDING> {}

    interface SuccessAction extends Action<typeof SUCCESS> {}

    interface ErrorAction extends Action<typeof ERROR> {}

    const pending = (): PendingAction => ({
        type: PENDING,
    });
    const error = (): ErrorAction => ({
        type: ERROR,
    });
    const success = (): SuccessAction => ({
        type: SUCCESS,
    });

    return (data, id, callback, resolve): IThunkAction => (dispatch) => {
        dispatch(
            request({
                data,
                url: url(id),
                method: 'POST',
                callback,
                resolve,
                errorAction: error,
                pendingAction: pending,
                successAction: success,
            }),
        );
    };
};
