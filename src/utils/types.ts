import {ThunkAction} from 'redux-thunk';
import {RootState} from '../store';
import {Action} from 'redux';
import React from 'react';

export type ISimpleAction = Action<string>;

export type IActionCreator<ReturnType = ISimpleAction> = (
    ...args: any
) => ReturnType;

export interface IDataAction<D> extends ISimpleAction {
    payload: D;
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

export type LangBaseJson<D = string> = {
    [language in Language]: D;
};

export type StringsJson = {
    [key: string]: LangBaseJson;
};

export enum Role {
    unknown = 'unknown',
    centreAgent = 'centre',
    fieldAgent = 'field',
}

export interface DrawerItem<P extends Path> {
    title?: LangBaseJson;
    icon?: React.ReactNode;
    path: P;
    component: React.ReactNode;
    hideInDrawer?: boolean;
}

export interface MainApplicationType<P extends Path> {
    routes: DrawerItem<P>[];
    role: Role;
    headerTitle: LangBaseJson;
    drawerVisible: boolean;
    defaultPath: P;
}

export type Location = {lat: number; lng: number};

export interface Option {
    label: string;
    value: any;
}

export enum FieldTypes {
    Text = 'Text',
    Number = 'Number',
    Location = 'Location',
    Date = 'Date',
}

export interface FieldType {
    name: string;
    title: string;
    type: FieldTypes;
}

export interface Field extends FieldType {
    required?: boolean;
    options?: Array<Option>;
}

export interface FilledField extends FieldType {
    value: string | number | Location | Option | Date;
}

export type ID = string;

export interface FormType {
    title: string;
    id: ID;
}

export interface Form extends FormType {
    fields: Array<Field>;
}

export interface FormAnswer extends FormType {
    fields: Array<FilledField>;
    createdAt: Date;
}

export type Path = string;
