export const FORMS = '/forms';
export const FORMS_DETAIL = (id: string) => '/form/' + id;
export const FORM_ANSWERS = '/form-answers';
export const FORM_ANSWERS_DETAIL = (id: string) => '/form-answer/' + id;

type Form = typeof FORMS;
type FormDetail = ReturnType<typeof FORMS_DETAIL>;
type FormAnswer = typeof FORM_ANSWERS;
type FormAnswerDetail = ReturnType<typeof FORM_ANSWERS_DETAIL>;
export type FieldAgentPaths = FormAnswer | Form | FormAnswerDetail | FormDetail;
