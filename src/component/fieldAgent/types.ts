import {InputValues} from './form/input/types';

export type FormValues = {
    [key: string]: InputValues;
};

export const GET_FORMS = 'GET_FORMS';
export const GET_FILLED_FORMS = 'GET_FILLED_FORMS';
export const SUBMIT_FORM = 'SUBMIT_FORM';
