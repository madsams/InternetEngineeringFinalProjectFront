import {Form, FormAnswer, IDataAction} from '../../utils/types';
import api from '../../utils/API';
import {
    createGetRequestSimpleActions,
    createGetRequestWithIdActions,
    createGetRequestWithParamsActions,
    createPostRequestWithIdActions,
} from '../../utils/generics';
import {
    FormValues,
    GET_ALL_FORMS,
    GET_FORM_ANSWER_DETAIL,
    GET_FORM_ANSWERS,
    GET_FORM_DETAIL,
    GET_POLYGON_OF_LOCATION,
    PolygonsOfLocation,
    SUBMIT_FORM,
} from './types';

export const getPolygonOfLocation = createGetRequestWithParamsActions<
    PolygonsOfLocation[],
    //todo Location
    {lat: number; long: number}
>(GET_POLYGON_OF_LOCATION, api.polygon);
export const resetPolygonOfLocation = (): IDataAction<PolygonsOfLocation> => ({
    type: GET_POLYGON_OF_LOCATION + '_SUCCESS',
    payload: [],
});

export const submitForm = createPostRequestWithIdActions<{values: FormValues}>(
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
>(GET_FORM_ANSWER_DETAIL, api.formAnswers);
