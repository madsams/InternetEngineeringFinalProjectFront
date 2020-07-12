import {ThunkAction} from 'redux-thunk';
import {RootState} from '../store';
import {Action} from 'redux';

export type ISimpleAction = Action<string>;

export type IActionCreator<ReturnType = ISimpleAction> = (
    ...args: any
) => ReturnType;

export type IThunkAction<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    ISimpleAction
>;

export type Language = 'fa' | 'en';
