import React from 'react';
import {IInputProps} from './types';
import {Location} from '../../../../utils/types';
import {TextField} from '@material-ui/core';
import MapModal from './MapModal';

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

    const handleClick = () => {
        handleOpen();
        onBlur();
    };

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    //todo show polygons
    return (
        <>
            <TextField
                required={required}
                InputLabelProps={{shrink: !!value}}
                label={title}
                id={name}
                value={value ? `(${value.lat} ${value.lng})` : null}
                onClick={handleClick}
            />
            <MapModal choose={onChange} onClose={handleClose} open={open} />
        </>
    );
};
export default InputLocation;
