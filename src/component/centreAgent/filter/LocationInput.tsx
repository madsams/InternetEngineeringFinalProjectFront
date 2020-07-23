import React, {useEffect} from 'react';
import {MenuItem, Select} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {getAreas} from '../actions';
import {RootState} from '../../../store';
import {DataRequestReducer} from '../../../utils/generics';
import {Area, StringsJson} from '../../../utils/types';
import ILoadingChecker from '../../utils/ILoadingChecker';
import IFailedChecker from '../../utils/IFailedChecker';
import {useLanguage} from '../../../utils/hooks';

interface LocationInputProps {
    addFilter: (area: Area) => void;
    filters: Area[] | undefined;
}

const strings: StringsJson = {
    placeholder: {
        en: 'Choose area',
        fa: 'انتخاب منطقه',
    },
};

const LocationInput = ({addFilter, filters}: LocationInputProps) => {
    const dispatch = useDispatch();
    const placeholder = useLanguage(strings.placeholder);
    useEffect(() => {
        dispatch(getAreas());
    }, [dispatch]);
    const {isLoading, isFailed, data: areas} = useSelector<
        RootState,
        DataRequestReducer<Area[]>
    >((state) => state.centre.areas);

    const handleChoose = (event: React.ChangeEvent<{value: unknown}>) =>
        addFilter(JSON.parse(event.target.value as string) as Area);
    return (
        <ILoadingChecker isLoading={isLoading}>
            <IFailedChecker isFailed={isFailed} reloadAction={getAreas}>
                <Select
                    renderValue={(value) => <div>{'' + value}</div>}
                    value={placeholder}
                    onChange={handleChoose}
                    className="w-100">
                    {areas
                        .filter((a) =>
                            filters
                                ? !filters.map((f) => f.id).includes(a.id)
                                : true,
                        )
                        .map((a) => (
                            <MenuItem
                                key={a.id}
                                value={JSON.stringify(a)}
                                button={false}>
                                {a.name}
                            </MenuItem>
                        ))}
                </Select>
            </IFailedChecker>
        </ILoadingChecker>
    );
};
export default LocationInput;
