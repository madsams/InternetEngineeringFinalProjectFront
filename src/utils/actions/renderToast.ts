import {toastr} from 'react-redux-toastr';

const ToastrOptions = {
    showCloseButton: false,
    closeOnToastrClick: true,
};

export enum toastTypes {
    LIGHT = 'light',
    MESSAGE = 'message',
    INFO = 'info',
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
}

const renderToast = (title: string, message: string, type: toastTypes) =>
    toastr[type](title, message, ToastrOptions);
export default renderToast;
