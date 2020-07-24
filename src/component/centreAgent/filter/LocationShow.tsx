import {LocationFilter} from '../types';
import React from 'react';
import {FilterInputProps} from './index';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {Area, ID} from '../../../utils/types';
import {setFilter} from '../actions';
import {RootState} from '../../../store';

interface LocationProps extends FilterInputProps {
    filter: LocationFilter | undefined;
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

const LocationShow = ({filter, name}: LocationProps) => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const areas = useSelector<RootState, Area[]>(
        (state) => state.centre.areas.data,
    );

    const getRemoveFilter = (id: ID) => () =>
        dispatch(setFilter(name, filter ? filter.filter((f) => f !== id) : []));

    const findFilter = (f: ID): string =>
        (areas.find((a) => a.id === f) as Area).name;
    return (
        <>
            {filter &&
                filter.map((f, i) => (
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
        </>
    );
};
export default LocationShow;
