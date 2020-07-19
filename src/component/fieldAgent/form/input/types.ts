import {Field, Location, Option} from '../../../../utils/types';

export type InputValues = string | number | Location | Date | Option | null;

export interface IInputProps extends Field {
    value: InputValues;
    disabled?: boolean;

    onBlur(): void;

    onChange(value: InputValues): void;
}
