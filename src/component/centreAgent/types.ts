import {ID, IDataAction} from '../../utils/types';

export const CENTRE_GET_ALL_FORMS = 'CENTRE_GET_ALL_FORMS';
export const CENTRE_GET_FORM_TABLE = 'CENTRE_GET_FORM_TABLE';
export const CENTRE_GET_FORM_ANSWER_DETAIL = 'CENTRE_GET_FORM_ANSWER_DETAIL';
export const CENTRE_GET_AREAS = 'CENTRE_GET_AREAS';

export const CENTRE_SET_FILTER = 'CENTRE_SET_FILTER';

export type LocationFilter = ID[];
export type DateFilter = {from: Date; to: Date};
export type NumberFilter = {from: number; to: number};
export type TextFilter = string[];

export type Filter =
    | LocationFilter
    | DateFilter
    | NumberFilter
    | TextFilter
    | undefined;

export interface SetFilterPayload {
    name: string;
    filter: Filter;
}

export interface SetFilter extends IDataAction<SetFilterPayload> {
    type: typeof CENTRE_SET_FILTER;
}

export type FilterAction = SetFilter;

export interface FilterState {
    [name: string]: Filter;
}

export interface GetFormTableParam {
    filter: FilterState;
}
