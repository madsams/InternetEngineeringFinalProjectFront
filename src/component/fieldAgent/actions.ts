import {FilledForm, Form, Location} from '../../utils/types';
import api from '../../utils/API';
import {
    createGetRequestActions,
    createPostRequestActions,
} from '../../utils/generics';
import {
    FormValues,
    GeoLocation,
    GET_FILLED_FORMS,
    GET_FORMS,
    GET_GEO_LOCATION,
    SUBMIT_FORM,
} from './types';

export const getForms = createGetRequestActions<Form, undefined>(
    GET_FORMS,
    api.forms,
);
export const getFilledForms = createGetRequestActions<FilledForm, undefined>(
    GET_FILLED_FORMS,
    api.filledForms,
);
export const submitForm = createPostRequestActions<FormValues>(
    SUBMIT_FORM,
    api.forms,
);
export const getGeoLocation = createGetRequestActions<
    GeoLocation[],
    {location: Location}
>(GET_GEO_LOCATION, api.geoLocation);
