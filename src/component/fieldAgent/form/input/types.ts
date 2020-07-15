import {Field, Location} from '../../../../utils/types';

export type InputValues = string | number | Location | Date | null;

export interface IInputProps extends Field {
    value: InputValues;

    onBlur(): void;

    onChange(value: InputValues): void;
}
