import React, {useEffect, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {createStyles, Modal, Theme} from '@material-ui/core';
import {LangBaseJson, Location, StringsJson} from '../../../../utils/types';
import IButton from '../../../utils/IButton';
import IError from './IError';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {getPolygonOfLocation, resetPolygonOfLocation} from '../../actions';
import {RootState} from '../../../../store';

interface MapModalProps {
    open: boolean;
    choose(location: Location): void;

    onClose(): void;
}

const strings: StringsJson = {
    okButtonText: {
        en: 'OK',
        fa: 'تایید',
    },
    cancelButtonText: {
        en: 'Cancel',
        fa: 'لغو',
    },
    notChosenError: {
        en: 'Mark the location first',
        fa: 'هنوز مکان مورد نظر خود را انتخاب نکرده‌اید',
    },
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: '80%',
            height: '80%',
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%, -50%)`,
        },
        button: {
            maxWidth: 80,
            marginTop: '30px !important',
        },
        marker: {
            height: 5,
            width: 5,
            borderRadius: 10,
            backgroundColor: 'red',
        },
    }),
);
const MapModal = ({open, choose, onClose}: MapModalProps) => {
    const classes = useStyles();
    const [marker, setMarker] = useState<Location | null>(null);
    const [error, setError] = useState<LangBaseJson | null>(null);
    const isLoading = useSelector<RootState, boolean>(
        (state) => state.field.polygonsOfLocation.isLoading,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (open) dispatch(resetPolygonOfLocation());
    }, [dispatch, open]);

    const handleClose = () => {
        onClose();
        setError(null);
        setMarker(null);
    };
    const handleSubmit = () => {
        if (!marker) {
            setError(strings.notChosenError);
        } else {
            choose(marker);
            handleClose();
        }
    };
    const options = {fullscreenControl: false};
    const handleClick = ({lat, lng}: Location) => {
        dispatch(getPolygonOfLocation({lat, lng}));
        setMarker({lat, lng});
        setError(null);
    };

    const bootstrapURLKeys = {
        key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    };
    const defaultCenter = {
        lat: 35.8021869463483,
        lng: 51.393752052927404,
    };
    return (
        <Modal open={open}>
            <div
                className={
                    'flex-1 align-items-center flex-column ' + classes.paper
                }>
                <GoogleMapReact
                    options={options}
                    onClick={handleClick}
                    bootstrapURLKeys={bootstrapURLKeys}
                    defaultCenter={defaultCenter}
                    defaultZoom={10}>
                    {marker && (
                        <div
                            className={classes.marker}
                            // @ts-ignore
                            lat={marker.lat}
                            lng={marker.lng}
                        />
                    )}
                </GoogleMapReact>
                <div className="flex-1 flex-row align-self-stretch m-sm-1">
                    <IError error={error} className="position-absolute" />
                    <IButton
                        title={strings.okButtonText}
                        onClick={handleSubmit}
                        isLoading={isLoading}
                        className={classes.button}
                    />
                    <IButton
                        title={strings.cancelButtonText}
                        onClick={handleClose}
                        className={classes.button}
                    />
                </div>
            </div>
        </Modal>
    );
};
export default MapModal;
