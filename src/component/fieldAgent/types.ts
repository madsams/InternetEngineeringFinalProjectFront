import {InputValues} from './form/input/types';

export type FormValues = {
    [key: string]: InputValues;
};

export type PolygonsOfLocation = string[];

export const GET_ALL_FORMS = 'GET_ALL_FORMS';
export const GET_FORM_DETAIL = 'GET_FORM';
export const GET_FORM_ANSWERS = 'GET_FORM_ANSWERS';
export const GET_FORM_ANSWER_DETAIL = 'GET_FORM_ANSWER_DETAIL';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const GET_POLYGON_OF_LOCATION = 'GET_POLYGON_OF_LOCATION';
