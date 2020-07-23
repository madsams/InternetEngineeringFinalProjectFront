import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import ITooltip from '../../utils/ITooltip';
import React, {useState} from 'react';
import {Field, FieldTypes, StringsJson} from '../../../utils/types';
import {createStyles, Modal, Theme, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {Filter, LocationFilter, NumberFilter} from '../types';
import IButton from '../../utils/IButton';
import {getFormTable, setAllFilter} from '../actions';
import {useParams} from 'react-router-dom';
import {useGenerateFormTableParam} from '../hook';
import LocationInput from './LocationInput';
import LocationShow from './LocationShow';
import NumberShow from './NumberShow';
import NumberInput from './NumberInput';

const strings: StringsJson = {
    iconTooltip: {
        en: 'Filter',
        fa: 'فیلتر',
    },
    cancel: {
        en: 'Cancel',
        fa: 'لغو',
    },
    submit: {
        en: 'Submit',
        fa: 'تایید',
    },
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: '80%',
            height: '80%',
            backgroundColor: theme.palette.background.default,
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
    }),
);

const CentreTableFilter = () => {
    const {id} = useParams();
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = useState<boolean>(false);
    const param = useGenerateFormTableParam();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fields = useSelector<RootState, Array<Field>>(
        (state) => state.centre.formTable.data.fields,
    );

    const isLoading = useSelector<RootState, boolean>(
        (state) => state.centre.formTable.isLoading,
    );

    const handleSubmit = () => {
        dispatch(getFormTable(id, param));
    };

    const handleCancel = () => {
        dispatch(setAllFilter({}));
        handleClose();
    };

    return (
        <>
            <Modal open={open}>
                <div
                    className={
                        'flex-1 align-items-stretch flex-column ' +
                        classes.paper
                    }>
                    {fields.map((f) => (
                        <IFilter
                            type={f.type}
                            name={f.name}
                            title={f.title}
                            key={'f' + f.name}
                        />
                    ))}
                    <div className="flex-1 flex-row align-self-stretch m-sm-1">
                        <IButton
                            title={strings.submit}
                            onClick={handleSubmit}
                            isLoading={isLoading}
                            className={classes.button}
                        />
                        <IButton
                            title={strings.cancel}
                            onClick={handleCancel}
                            className={classes.button}
                        />
                    </div>
                </div>
            </Modal>
            <ITooltip title={strings.iconTooltip}>
                <IconButton onClick={handleOpen}>
                    <FilterListIcon />
                </IconButton>
            </ITooltip>
        </>
    );
};

interface FilterProps {
    type: FieldTypes;
    name: string;
    title: string;
}

const IFilter = ({type, title, name}: FilterProps) => {
    const filter = useSelector<RootState, Filter>(
        (state) => state.centre.filter[name],
    );

    const show =
        type === FieldTypes.Text ? (
            <FilterText name={name} filter={filter} />
        ) : type === FieldTypes.Number ? (
            <NumberShow name={name} filter={filter as NumberFilter} />
        ) : type === FieldTypes.Location ? (
            <LocationShow name={name} filter={filter as LocationFilter} />
        ) : (
            <FilterDate name={name} filter={filter} />
        );

    const input =
        type === FieldTypes.Text ? (
            <FilterText name={name} filter={filter} />
        ) : type === FieldTypes.Number ? (
            <NumberInput name={name} filter={filter as NumberFilter} />
        ) : type === FieldTypes.Location ? (
            <LocationInput name={name} filter={filter as LocationFilter} />
        ) : (
            <FilterDate name={name} filter={filter} />
        );

    return (
        <>
            <div className="flex-1 flex-row align-items-center justify-content-start">
                <div className="flex-1">
                    <Typography>{title}</Typography>
                </div>
                <div className="flex-2 flex-row align-items-center">
                    <div className="flex-1">{input}</div>
                    <div className="flex-2 flex-row align-items-center justify-content-center">
                        {show}
                    </div>
                </div>
            </div>
        </>
    );
};

export interface FilterInputProps {
    filter: Filter;
    name: string;
}

const FilterText = ({filter, name}: FilterInputProps) => {
    return <div>text</div>;
};

const FilterNumber = ({filter, name}: FilterInputProps) => {
    return <div>number</div>;
};

const FilterDate = ({filter, name}: FilterInputProps) => {
    return <div>date</div>;
};
export default CentreTableFilter;
