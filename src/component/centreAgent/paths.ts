export const FORMS = '/forms';
export const FORM_TABLE = (formId: string) => '/form-records/' + formId;
export const FORM_RECORD_DETAIL = (answerId: string) =>
    '/form-detail/' + answerId;

type Forms = typeof FORMS;
type FormTable = ReturnType<typeof FORM_TABLE>;
type FormRecordDetail = ReturnType<typeof FORM_RECORD_DETAIL>;

export type CentrePaths = Forms | FormTable | FormRecordDetail;
