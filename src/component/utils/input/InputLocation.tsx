import React from 'react';
import {IInputProps} from './types';
import {Location, PolygonsOfLocation} from '../../../utils/types';
import {TextField} from '@material-ui/core';
import MapModal from './MapModal';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {useJoin} from '../../../utils/hooks';

interface InputLocationProps extends IInputProps {
    value: Location | PolygonsOfLocation | null;
}

const InputLocation = ({
    name,
    title,
    value,
    required,
    onBlur,
    onChange,
    disabled,
}: InputLocationProps) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const join = useJoin();

    const polygons = useSelector<RootState, PolygonsOfLocation>(
        (state) => state.field.polygonsOfLocation.data,
    );

    const handleClick = () => {
        if (!disabled) handleOpen();
        onBlur();
    };

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const getValue = (): string | undefined => {
        if (!value) {
            return undefined;
        } else if ((value as Location).lat) {
            const val = value as Location;
            return polygons.length > 0
                ? join(polygons.map((v) => v.name))
                : `${val.lat}, ${val.lng}`;
        } else {
            const val = value as PolygonsOfLocation;
            return join(val.map((v) => v.name));
        }
    };
    return (
        <>
            <TextField
                disabled={disabled}
                required={required}
                InputLabelProps={{shrink: !!value}}
                label={title}
                inputProps={{
                    dir: value && polygons.length === 0 ? 'ltr' : '',
                }}
                id={name}
                autoComplete="off"
                value={getValue()}
                onClick={handleClick}
                onFocus={handleClick}
            />
            <MapModal choose={onChange} onClose={handleClose} open={open} />
        </>
    );
};
export default InputLocation;
