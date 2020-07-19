import React, {useEffect} from 'react';
import {IInputProps} from './types';
import {Location, StringsJson} from '../../../../utils/types';
import {TextField} from '@material-ui/core';
import MapModal from './MapModal';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store';
import {PolygonsOfLocation} from '../../types';
import {useLanguageSelector} from '../../../../utils/hooks';

interface InputLocationProps extends IInputProps {
    value: Location | null;
}

const strings: StringsJson = {
    polygonJoinString: {
        en: ', ', //comma
        fa: '، ', //virgool
    },
};

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
    const [text, setText] = React.useState<string | undefined>(undefined);

    const polygons = useSelector<RootState, PolygonsOfLocation>(
        (state) => state.field.polygonsOfLocation.data,
    );

    const languageSelector = useLanguageSelector();

    useEffect(
        () =>
            setText(
                value
                    ? polygons.length > 0
                        ? polygons.join(
                              languageSelector(strings.polygonJoinString),
                          )
                        : `${value.lat}, ${value.lng}`
                    : undefined,
            ),
        [languageSelector, value, polygons],
    );

    const handleClick = () => {
        if (!disabled) handleOpen();
        onBlur();
    };

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

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
                value={text}
                onClick={handleClick}
            />
            <MapModal choose={onChange} onClose={handleClose} open={open} />
        </>
    );
};
export default InputLocation;
