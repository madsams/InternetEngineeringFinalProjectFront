import {ID} from './types';

export type SimpleApi = string;
export type IdApi = (id: ID) => string;

const formsList: SimpleApi = '/api/forms';
const formDetail: IdApi = (id: ID) => `/api/forms/${id}`;
const answersList: SimpleApi = '/api/users/form-answers';
const answerDetail: IdApi = (id: ID) => `/api/form-answers/${id}`;
const answerOfForm: IdApi = (id: ID) => `/api/forms/${id}/form-answers`;
const areaTestPoint: SimpleApi = '/api/areas/testpoint';
const getRoles: SimpleApi = '/api/users/roles';
const getAreas: SimpleApi = '/api/areas';

const api = {
    formsList,
    formDetail,
    answersList,
    answerDetail,
    answerOfForm,
    areaTestPoint,
    getRoles,
    getAreas,
};

export default api;
