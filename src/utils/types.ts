import {ThunkAction} from 'redux-thunk';
import {RootState} from '../store';
import {Action} from 'redux';
import React from 'react';

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

export enum Language {
    fa = 'fa',
    en = 'en',
}

export type Strings = {
    [language in Language]: string;
};

export type StringsJson = {
    [key: string]: Strings;
};

export enum Role {
    unknown = 'unknown',
    centreAgent = 'centre',
    fieldAgent = 'field',
}

export interface DrawerItem {
    title?: Strings;
    icon?: React.ReactNode;
    path: string;
    component: React.ComponentType<any>;
}

export interface MainApplicationType {
    routes: DrawerItem[];
    role: Role;
    headerTitle: Strings;
    drawerVisible: boolean;
}
