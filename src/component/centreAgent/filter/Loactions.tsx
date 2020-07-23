import {LocationFilter} from '../types';
import React from 'react';
import {FilterInputProps} from './CentreTableFilter';
import {makeStyles} from '@material-ui/core/styles';
import LocationInput from './LocationInput';
import {useDispatch} from 'react-redux';
import {Area} from '../../../utils/types';
import {setFilter} from '../actions';

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
    const addFilter = (area: Area) =>
        dispatch(setFilter(name, filters ? [...filters, area] : [area]));

    const getRemoveFilter = (filter: Area) => () =>
        dispatch(
            setFilter(
                name,
                filters ? filters.filter((f) => f.id !== filter.id) : [],
            ),
        );

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
                            {f.name}
                        </div>
                    ))}
            </div>
        </>
    );
};
export default Locations;
