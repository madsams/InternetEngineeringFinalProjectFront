import {ThunkAction} from 'redux-thunk';
import {RootState} from '../store';
import {Action} from 'redux';
import React from 'react';

export const _SUCCESS = '_SUCCESS';
export const _ERROR = '_ERROR';
export const _PENDING = '_PENDING';

export const tokenStorageKey = 'token';
export const tokenExpiresStorageKey = 'tokenExpires';
export const roleStorageKey = 'role';
export const languageStorageKey = 'language';

export type ISimpleAction = Action<string>;

export type IActionCreator<ReturnType = ISimpleAction> = (
    ...args: any
) => ReturnType;

export type IObject = {[k: string]: any};

export type Order = 'asc' | 'desc';

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

export type LangBaseJsonCreator<D = string, P = LangBaseJson<D>> = (
    text: P,
) => {
    [language in Language]: D;
};

export type StringsJson = {
    [key: string]: LangBaseJson;
};

export type StringCreatorsJson<D = string, P = LangBaseJson<D>> = {
    [key: string]: LangBaseJsonCreator<D, P>;
};

export type LangBaseJsonCreator2 = (param: any) => string;

export type StringCreatorsJson2 = {
    [key: string]: LangBaseJson<LangBaseJsonCreator2>;
};

export enum Role {
    unknown = 'unknown',
    centreAgent = 'centre',
    fieldAgent = 'field',
}

export type PolygonsOfLocation = Area[];

export interface DrawerItem<P extends Path> {
    title?: LangBaseJson;
    icon?: React.ReactNode;
    path: P;
    component: React.ReactNode;
    hideInDrawer?: boolean;
    isUnSecure?: boolean;
}

export interface MainApplicationType<P extends Path> {
    routes: DrawerItem<P>[];
    role: Role;
    headerTitle: LangBaseJson;
    drawerVisible: boolean;
    defaultPath: P;
}

export type Location = {lat: number; lng: number};

export type Value = string | number | Location | PolygonsOfLocation;

export interface Option {
    label: string;
    value: Value;
}

export enum FieldTypes {
    Text = 'Text',
    Number = 'Number',
    Location = 'Location',
    Date = 'Date',
}

export interface Field {
    name: string;
    title: string;
    type: FieldTypes;
    required?: boolean;
    options?: Array<Option>;
}

export interface FieldAnswer extends Field {
    value: Value;
}

export type ID = string;

export interface FormType {
    title: string;
    id: ID;
    answersCount: number;
    createdAt: Date;
}

export interface Form extends FormType {
    fields: Array<Field>;
}

export interface FormAnswer extends FormType {
    fields: Array<FieldAnswer>;
    formId: ID;
}

export type Path = string;

export interface FormAnswersRecordValues {
    [nameOfField: string]: Value | Array<string>;
}

export interface FormAnswersRecord {
    createdAt: Date;
    userId: ID;
    answerId: ID;
    values: FormAnswersRecordValues;
}

interface Sum {
    [nameOfField: string]: number;
}

export interface FormTable extends Form {
    records: Array<FormAnswersRecord>;
    sum: Sum;
}

export interface Area {
    id: ID;
    name: string;
}
