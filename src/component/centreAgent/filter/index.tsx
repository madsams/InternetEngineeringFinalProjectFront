import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import ITooltip from '../../utils/ITooltip';
import React, {useState} from 'react';
import {Field, FieldTypes, StringsJson} from '../../../utils/types';
import {
    createStyles,
    Divider,
    Modal,
    Theme,
    Typography,
    useMediaQuery,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {
    DateFilter,
    Filter,
    LocationFilter,
    NumberFilter,
    TextFilter,
} from '../types';
import IButton from '../../utils/IButton';
import {getFormTable, setAllFilter} from '../actions';
import {useParams} from 'react-router-dom';
import {useGenerateFormTableParam} from '../hook';
import LocationInput from './LocationInput';
import LocationShow from './LocationShow';
import NumberShow from './NumberShow';
import NumberInput from './NumberInput';
import DateShow from './DateShow';
import DateInput from './DateInput';
import TextInput from './TextInput';
import TextShow from './TextShow';

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
            overflow: 'scroll',
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

const useLargeStyle = makeStyles((theme: Theme) =>
    createStyles({
        filterWrapper: {
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
        },
        name: {
            display: 'flex',
            flex: 1,
        },
        divider: {
            marginTop: 20,
            marginBottom: 20,
            marginLeft: -theme.spacing(1),
            marginRight: -theme.spacing(1),
        },
        show: {
            display: 'flex',
            flex: 2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
        },
        input: {
            display: 'flex',
            flex: 1,
        },
        inputShowWrapper: {
            display: 'flex',
            flex: 3,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
        },
    }),
);

const useSmallStyle = makeStyles((theme: Theme) =>
    createStyles({
        filterWrapper: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        name: {
            minWidth: 200,
        },
        divider: {
            marginTop: 20,
            marginBottom: 20,
            marginLeft: -theme.spacing(1),
            marginRight: -theme.spacing(1),
        },
        show: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        input: {
            alignSelf: 'stretch',
        },
        inputShowWrapper: {
            display: 'flex',
            flexDirection: 'column',
        },
    }),
);

const IFilter = ({type, title, name}: FilterProps) => {
    const filter = useSelector<RootState, Filter>(
        (state) => state.centre.filter[name],
    );

    const show =
        type === FieldTypes.Text ? (
            <TextShow name={name} filter={filter as TextFilter} />
        ) : type === FieldTypes.Number ? (
            <NumberShow name={name} filter={filter as NumberFilter} />
        ) : type === FieldTypes.Location ? (
            <LocationShow name={name} filter={filter as LocationFilter} />
        ) : (
            <DateShow name={name} filter={filter as DateFilter} />
        );

    const input =
        type === FieldTypes.Text ? (
            <TextInput name={name} filter={filter as TextFilter} />
        ) : type === FieldTypes.Number ? (
            <NumberInput name={name} filter={filter as NumberFilter} />
        ) : type === FieldTypes.Location ? (
            <LocationInput name={name} filter={filter as LocationFilter} />
        ) : (
            <DateInput name={name} filter={filter as DateFilter} />
        );

    const largeClasses = useLargeStyle();
    const smallClasses = useSmallStyle();
    const isLarge = useMediaQuery('(min-width:850px)');

    return (
        <>
            <div
                className={
                    (isLarge ? largeClasses : smallClasses).filterWrapper
                }>
                <div className={(isLarge ? largeClasses : smallClasses).name}>
                    <Typography>{title}</Typography>
                </div>
                <div
                    className={
                        (isLarge ? largeClasses : smallClasses).inputShowWrapper
                    }>
                    <div
                        className={
                            (isLarge ? largeClasses : smallClasses).input
                        }>
                        {input}
                    </div>
                    <div
                        className={
                            (isLarge ? largeClasses : smallClasses).show
                        }>
                        {show}
                    </div>
                </div>
            </div>
            <Divider className={largeClasses.divider} />
        </>
    );
};

export interface FilterInputProps {
    filter: Filter;
    name: string;
}

export default CentreTableFilter;
