import {ThunkAction} from 'redux-thunk';
import {RootState} from '../store';
import {Action} from 'redux';
import React from 'react';

export type ISimpleAction = Action<string>;

export type IActionCreator<ReturnType = ISimpleAction> = (
    ...args: any
) => ReturnType;

export interface IDataAction<D> extends ISimpleAction {
    payload?: D;
}

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
    component: React.ReactNode;
    hideInDrawer?: boolean;
}

export interface MainApplicationType {
    routes: DrawerItem[];
    role: Role;
    headerTitle: Strings;
    drawerVisible: boolean;
    defaultPath: string;
}

export type Location = {lat: number; lng: number};

export interface Option {
    label: string;
    value: any;
}

export type FieldTypes = 'Text' | 'Number' | 'Location' | 'Date';

export interface Field {
    name: string;
    title: string;
    type: FieldTypes;
    required?: boolean;
    options?: Array<Option>;
}

export interface Form {
    title: string;
    id: number;
    fields: Array<Field>;
}

export interface FilledField {
    name: string;
    title: string;
    type: FieldTypes;
    value: string | number | Location | Option | Date;
}

export interface FilledForm {
    id: number;
    title: string;
    fields: Array<FilledField>;
}
