import {Language, Strings} from './types';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {useState} from 'react';

export const useLanguage = (str: Strings): string => {
    const language = useSelector<RootState, Language>(
        (state) => state.language,
    );
    return str[language] || '';
};
export const useDirection = (): boolean => {
    const rtlLanguages = ['fa', 'ar'];

    const language = useSelector<RootState, Language>(
        (state) => state.language,
    );

    return rtlLanguages.includes(language);
};
type SetValueArg<T> = ((preValue: T) => T) | T;

export const useLocalStorage = <DataType = any>(
    key: string,
    initialValue: DataType,
): [DataType, (value: SetValueArg<DataType>) => void] => {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState<DataType>(() => {
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value: SetValueArg<DataType>) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };

    return [storedValue, setValue];
};

export enum Role {
    unknown = 'unknown',
    centreAgent = 'centre',
    fieldAgent = 'field',
}

export const useRole = () => {
    return useLocalStorage<Role>('role', Role.unknown);
};
