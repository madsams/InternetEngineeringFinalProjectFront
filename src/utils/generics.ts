import {Form, IDataAction, IThunkAction} from './types';
import {Action, Reducer} from 'redux';
import request from './effects/request';
import API from './API';

export interface DataReducer<D> {
    isLoading: boolean;
    data: D;
}

const initialState = <D>(data: D): DataReducer<D> => ({
    isLoading: false,
    data,
});

export const createDataReducer = <SD>(
    typePrefix: string,
    initialData: SD,
): Reducer<DataReducer<SD>, IDataAction<SD>> => (
    state = initialState(initialData),
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
export const createDataActions = <SD>(prefix: string, url: API): DataAction => {
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
