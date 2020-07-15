import {IDataAction, ISimpleAction, IThunkAction} from './types';
import {Action, Reducer} from 'redux';
import request from './effects/request';
import API from './API';

export interface RequestReducer {
    isLoading: boolean;
}

const initialRequestState = (): RequestReducer => ({
    isLoading: false,
});

export const createRequestReducer = (
    typePrefix: string,
): Reducer<RequestReducer, ISimpleAction> => (
    state = initialRequestState(),
    action,
) => {
    switch (action.type) {
        case typePrefix + '_PENDING':
            return {...state, isLoading: true};
        case typePrefix + '_ERROR':
        case typePrefix + '_SUCCESS':
            return {...state, isLoading: false};
        default:
            return state;
    }
};

export interface DataRequestReducer<D> {
    isLoading: boolean;
    data: D;
}

const initialDataRequestState = <D>(data: D): DataRequestReducer<D> => ({
    isLoading: false,
    data,
});

export const createDataRequestReducer = <SD>(
    typePrefix: string,
    initialData: SD,
): Reducer<DataRequestReducer<SD>, IDataAction<SD>> => (
    state = initialDataRequestState(initialData),
    action,
) => {
    switch (action.type) {
        case typePrefix + '_PENDING':
            return {...state, isLoading: true};
        case typePrefix + '_ERROR':
            return {...state, isLoading: false};
        case typePrefix + '_SUCCESS':
            return {...state, isLoading: false, forms: action.payload};
        default:
            return state;
    }
};

type GetRequestAction = (callback?: () => void) => IThunkAction;
export const createGetRequestActions = <SD>(
    prefix: string,
    url: API,
): GetRequestAction => {
    const PENDING = prefix + '_PENDING';
    const SUCCESS = prefix + '_SUCCESS';
    const ERROR = prefix + '_ERROR';

    interface PendingAction extends Action<typeof PENDING> {}

    interface SuccessAction extends Action<typeof SUCCESS> {
        payload: Array<SD>;
    }

    interface ErrorAction extends Action<typeof ERROR> {}

    const pending = (): PendingAction => ({
        type: PENDING,
    });
    const error = (): ErrorAction => ({
        type: ERROR,
    });
    const success = (data: Array<SD>): SuccessAction => ({
        type: SUCCESS,
        payload: data,
    });

    return (): IThunkAction => (dispatch) => {
        dispatch(
            request({
                url,
                method: 'GET',
                errorAction: error,
                pendingAction: pending,
                successAction: success,
            }),
        );
    };
};

type PostRequestAction<D> = (
    data: D,
    id: number,
    callback?: () => void,
) => IThunkAction;
export const createPostRequestActions = <D>(
    prefix: string,
    url: API,
): PostRequestAction<D> => {
    const PENDING = prefix + '_PENDING';
    const SUCCESS = prefix + '_SUCCESS';
    const ERROR = prefix + '_ERROR';

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

    return (data, id, callback): IThunkAction => (dispatch) => {
        dispatch(
            request({
                data: {...data, id},
                url: url,
                method: 'POST',
                callback,
                errorAction: error,
                pendingAction: pending,
                successAction: success,
            }),
        );
    };
};
