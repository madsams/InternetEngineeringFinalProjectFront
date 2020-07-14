import {useParams} from 'react-router-dom';
import React from 'react';

interface FieldFormProps {
    isFilled?: boolean;
}

const FieldForm = ({isFilled}: FieldFormProps) => {
    const {id} = useParams();
    return (
        <div>
            {isFilled && 'isFilled: '}
            {id}
        </div>
    );
};
export default FieldForm;
