import {toastr} from 'react-redux-toastr';
import {IThunkAction, Strings} from '../types';

const ToastrOptions = {
    showCloseButton: false,
    closeOnToastrClick: true,
};

export enum ToastTypes {
    LIGHT = 'light',
    MESSAGE = 'message',
    INFO = 'info',
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
}

const renderToast = (
    title: Strings,
    message: Strings,
    type: ToastTypes,
): IThunkAction => (dispatch, getState) => {
    const language = getState().language;
    const iTitle = title[language];
    const iMessage = message[language];
    return toastr[type](iTitle, iMessage, ToastrOptions);
};
export default renderToast;
