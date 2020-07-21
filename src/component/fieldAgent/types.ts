import {InputValues} from '../utils/input/types';

export type FormValues = {
    [key: string]: InputValues;
};

export const FIELD_GET_ALL_FORMS = 'FIELD_GET_ALL_FORMS';
export const FIELD_GET_FORM_DETAIL = 'FIELD_GET_FORM';
export const FIELD_GET_FORM_ANSWERS = 'FIELD_GET_FORM_ANSWERS';
export const FIELD_GET_FORM_ANSWER_DETAIL = 'FIELD_GET_FORM_ANSWER_DETAIL';
export const FIELD_GET_POLYGON_OF_LOCATION = 'FIELD_GET_POLYGON_OF_LOCATION';
export const SUBMIT_FORM = 'SUBMIT_FORM';
