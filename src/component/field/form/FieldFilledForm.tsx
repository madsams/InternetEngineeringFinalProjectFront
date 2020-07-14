import {FilledForm} from '../../../utils/types';
import createGenericForm from '../createGenericForm';

const FieldFilledForm = createGenericForm<FilledForm>(
    (state) => state.field.filled,
);
export default FieldFilledForm;
