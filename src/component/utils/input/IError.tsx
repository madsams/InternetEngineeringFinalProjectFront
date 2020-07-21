import React from 'react';
import {LangBaseJson} from '../../../utils/types';
import ITypography from '../ITypography';

interface IErrorProps {
    error: LangBaseJson | null;
    touched?: boolean;
    className?: string;
}

const IError = ({touched = true, error, className}: IErrorProps) =>
    touched && error ? (
        <ITypography
            className={className}
            variant="caption"
            color="error"
            text={error}
            prefix={'* '}
        />
    ) : null;

export default IError;
