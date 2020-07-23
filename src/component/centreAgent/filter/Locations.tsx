import {LocationFilter} from '../types';
import React from 'react';
import {FilterInputProps} from './index';
import {makeStyles} from '@material-ui/core/styles';
import LocationInput from './LocationInput';
import {useDispatch, useSelector} from 'react-redux';
import {Area, ID} from '../../../utils/types';
import {setFilter} from '../actions';
import {RootState} from '../../../store';

interface FilterLocationProps extends FilterInputProps {
    filters: LocationFilter | undefined;
}

const useStyle = makeStyles({
    loc: {
        backgroundColor: '#777',
        color: '#fff',
        width: 60,
        height: 25,
        fontSize: 12,
        cursor: 'pointer',
    },
});

const Locations = ({filters, name}: FilterLocationProps) => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const areas = useSelector<RootState, Area[]>(
        (state) => state.centre.areas.data,
    );
    const addFilter = (area: Area) =>
        dispatch(setFilter(name, filters ? [...filters, area.id] : [area.id]));

    const getRemoveFilter = (id: ID) => () =>
        dispatch(
            setFilter(name, filters ? filters.filter((f) => f !== id) : []),
        );

    const findFilter = (f: ID): string =>
        (areas.find((a) => a.id === f) as Area).name;
    return (
        <>
            <div className="flex-1">
                <LocationInput addFilter={addFilter} filters={filters} />
            </div>
            <div className="flex-2 flex-row align-items-center justify-content-start">
                {filters &&
                    filters.map((f, i) => (
                        <div
                            className={
                                'd-flex align-items-center justify-content-center rounded m-2 p-1 ' +
                                classes.loc
                            }
                            onClick={getRemoveFilter(f)}
                            key={i}>
                            {findFilter(f)}
                        </div>
                    ))}
            </div>
        </>
    );
};
export default Locations;
