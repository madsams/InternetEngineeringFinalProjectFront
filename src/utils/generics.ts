import {Form, IDataAction, ISimpleAction, IThunkAction} from './types';
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

type DataAction = () => IThunkAction;
export const createRequestActions = <SD>(
    prefix: string,
    url: API,
): DataAction => {
    const PENDING = prefix + '_PENDING';
    const SUCCESS = prefix + '_SUCCESS';
    const ERROR = prefix + '_ERROR';

    interface PendingAction extends Action<typeof PENDING> {}

    interface SuccessAction extends Action<typeof SUCCESS> {
        payload: Array<Form>;
    }

    interface ErrorAction extends Action<typeof ERROR> {}

    const pending = (): PendingAction => ({
        type: PENDING,
    });
    const error = (): ErrorAction => ({
        type: ERROR,
    });
    const success = (forms: Array<Form>): SuccessAction => ({
        type: SUCCESS,
        payload: forms,
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
