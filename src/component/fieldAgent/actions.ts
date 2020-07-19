import {
    _SUCCESS,
    Form,
    FormAnswer,
    IDataAction,
    Location,
} from '../../utils/types';
import api from '../../utils/API';
import {
    createGetRequestSimpleActions,
    createGetRequestWithIdActions,
    createGetRequestWithParamsActions,
    createPostRequestWithIdActions,
} from '../../utils/generics';
import {
    FormValues,
    FIELD_GET_ALL_FORMS,
    FIELD_GET_FORM_ANSWER_DETAIL,
    FIELD_GET_FORM_ANSWERS,
    FIELD_GET_FORM_DETAIL,
    FIELD_GET_POLYGON_OF_LOCATION,
    PolygonsOfLocation,
    SUBMIT_FORM,
} from './types';

export const getPolygonOfLocation = createGetRequestWithParamsActions<
    PolygonsOfLocation[],
    Location
>(FIELD_GET_POLYGON_OF_LOCATION, api.polygon);
export const resetPolygonOfLocation = (): IDataAction<PolygonsOfLocation> => ({
    type: FIELD_GET_POLYGON_OF_LOCATION + _SUCCESS,
    payload: [],
});

export const submitForm = createPostRequestWithIdActions<FormValues>(
    SUBMIT_FORM,
    api.formAnswers,
);

export const getForms = createGetRequestSimpleActions<Form>(
    FIELD_GET_ALL_FORMS,
    api.forms,
);

export const getFormAnswers = createGetRequestSimpleActions<FormAnswer>(
    FIELD_GET_FORM_ANSWERS,
    api.formAnswers,
);

export const getSelectedFormDetail = createGetRequestWithIdActions<Form>(
    FIELD_GET_FORM_DETAIL,
    api.forms,
);

export const getSelectedFormAnswerDetail = createGetRequestWithIdActions<
    FormAnswer
>(FIELD_GET_FORM_ANSWER_DETAIL, api.formAnswers);
