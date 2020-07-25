import {TextFilter} from '../types';
import React from 'react';
import {FilterInputProps} from './index';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch} from 'react-redux';
import {setFilter} from '../actions';

interface TextProps extends FilterInputProps {
    filter: TextFilter | undefined;
}

const useStyle = makeStyles({
    loc: {
        backgroundColor: '#777',
        color: '#fff',
        minWidth: 60,
        height: 25,
        fontSize: 12,
        cursor: 'pointer',
    },
});

const TextShow = ({filter, name}: TextProps) => {
    const classes = useStyle();
    const dispatch = useDispatch();

    const getRemoveFilter = (value: string) => () =>
        dispatch(
            setFilter(name, filter ? filter.filter((f) => f !== value) : []),
        );

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
                        {f}
                    </div>
                ))}
        </>
    );
};
export default TextShow;
