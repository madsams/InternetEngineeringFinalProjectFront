import {toastr} from 'react-redux-toastr';

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

const renderToast = (title: string, message: string, type: ToastTypes) =>
    toastr[type](title, message, ToastrOptions);
export default renderToast;
