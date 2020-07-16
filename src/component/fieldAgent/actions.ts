import {Form, FormAnswer, Location} from '../../utils/types';
import api from '../../utils/API';
import {
    createGetRequestSimpleActions,
    createGetRequestWithIdActions,
    createGetRequestWithParamsActions,
    createPostRequestWithIdActions,
} from '../../utils/generics';
import {
    FormValues,
    GeoLocation,
    GET_ALL_FORMS,
    GET_FORM_ANSWER_DETAIL,
    GET_FORM_ANSWERS,
    GET_FORM_DETAIL,
    GET_GEO_LOCATION,
    SUBMIT_FORM,
} from './types';

export const getGeoLocation = createGetRequestWithParamsActions<
    GeoLocation[],
    {location: Location}
>(GET_GEO_LOCATION, api.geoLocation);

export const submitForm = createPostRequestWithIdActions<FormValues>(
    SUBMIT_FORM,
    api.formAnswers,
);

export const getForms = createGetRequestSimpleActions<Form>(
    GET_ALL_FORMS,
    api.forms,
);

export const getFormAnswers = createGetRequestSimpleActions<FormAnswer>(
    GET_FORM_ANSWERS,
    api.formAnswers,
);

export const getSelectedFormDetail = createGetRequestWithIdActions<Form>(
    GET_FORM_DETAIL,
    api.forms,
);

export const getSelectedFormAnswerDetail = createGetRequestWithIdActions<
    FormAnswer
>(GET_FORM_ANSWER_DETAIL, api.forms);
