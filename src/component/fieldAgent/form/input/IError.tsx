import React from 'react';
import {LangBaseJson} from '../../../../utils/types';
import ITypography from '../../../utils/ITypography';

interface IErrorProps {
    error: LangBaseJson | null;
    touched: boolean;
}

const IError = ({touched, error}: IErrorProps) =>
    touched && error ? (
        <ITypography
            variant="caption"
            color="error"
            text={error}
            prefix={'* '}
        />
    ) : null;

export default IError;
