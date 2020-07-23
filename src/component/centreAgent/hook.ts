import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {FilterState, GetFormTableParam} from './types';

export const useGenerateFormTableParam = (): GetFormTableParam => {
    const filter = useSelector<RootState, FilterState>(
        (state) => state.centre.filter,
    );
    return {filter};
};
