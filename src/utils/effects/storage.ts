export const setStorage = (key: string, value: any) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        //ignore
    }
};

export const getStorage = <T>(key: string, initialState: T): T => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return initialState;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return initialState;
    }
};
