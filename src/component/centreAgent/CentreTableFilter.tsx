import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import ITooltip from '../utils/ITooltip';
import React, {useState} from 'react';
import {Field, FieldTypes, StringsJson} from '../../utils/types';
import {createStyles, Modal, Theme} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

const strings: StringsJson = {
    iconTooltip: {
        en: 'Filter',
        fa: 'فیلتر',
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
    }),
);

const CentreTableFilter = () => {
    const classes = useStyles();
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fields = useSelector<RootState, Array<Field>>(
        (state) => state.centre.formTable.data.fields,
    );
    return (
        <>
            <Modal open={open}>
                <div
                    className={
                        'flex-1 align-items-center flex-column ' + classes.paper
                    }>
                    {fields.map((f) => (
                        <Filter
                            type={f.type}
                            name={f.name}
                            key={'f' + f.name}
                        />
                    ))}
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
}

const Filter = ({type, name}: FilterProps) => {
    switch (type) {
        case FieldTypes.Text:
            return <TextFilter />;
        case FieldTypes.Number:
            return <NumberFilter />;
        case FieldTypes.Location:
            return <LocationFilter />;
        case FieldTypes.Date:
            return <DateFilter />;
    }
};

const TextFilter = () => {
    return <div>text</div>;
};

const LocationFilter = () => {
    return <div>location</div>;
};

const NumberFilter = () => {
    return <div>number</div>;
};

const DateFilter = () => {
    return <div>date</div>;
};
export default CentreTableFilter;
