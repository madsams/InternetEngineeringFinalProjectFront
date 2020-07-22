import {Field, Value} from '../../../utils/types';

export type InputValues = Value | null;

export interface IInputProps extends Field {
    value: InputValues;
    disabled?: boolean;

    onBlur(): void;

    onChange(value: InputValues): void;
}
