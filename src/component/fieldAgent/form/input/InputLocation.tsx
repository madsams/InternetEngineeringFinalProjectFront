import React from 'react';
import {IInputProps} from './types';
import {Location} from '../../../../utils/types';
import {TextField} from '@material-ui/core';
import MapModal from './MapModal';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store';
import {PolygonsOfLocation} from '../../types';

interface InputLocationProps extends IInputProps {
    value: Location | null;
}

const InputLocation = ({
    name,
    title,
    value,
    required,
    onBlur,
    onChange,
}: InputLocationProps) => {
    const [open, setOpen] = React.useState<boolean>(false);

    const polygons = useSelector<RootState, PolygonsOfLocation>(
        (state) => state.field.polygonsOfLocation.data,
    );

    const handleClick = () => {
        handleOpen();
        onBlur();
    };

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return (
        <>
            <TextField
                required={required}
                InputLabelProps={{shrink: !!value}}
                label={title}
                inputProps={{
                    dir: value && polygons.length === 0 ? 'ltr' : 'rtl',
                }}
                id={name}
                value={
                    value
                        ? polygons.length > 0
                            ? polygons.join(', ')
                            : `${value.lat}, ${value.lng}`
                        : undefined
                }
                onClick={handleClick}
            />
            <MapModal choose={onChange} onClose={handleClose} open={open} />
        </>
    );
};
export default InputLocation;
