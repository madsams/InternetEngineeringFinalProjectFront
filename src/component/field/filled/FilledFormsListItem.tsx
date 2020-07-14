import React from 'react';
import {ListItem, ListItemText, Typography} from '@material-ui/core';
import {Form} from '../../../utils/types';

interface FormsListItemProps {
    item: Form;
}

const FilledFormsListItem = ({item}: FormsListItemProps) => (
    <ListItem button component="a" href={`/form/filled/${item.id}`}>
        <ListItemText className="position-absolute">
            <Typography variant="overline">{item.id}:</Typography>
        </ListItemText>
        <ListItemText>
            <Typography className="text-center">{item.title}</Typography>
        </ListItemText>
    </ListItem>
);

export default FilledFormsListItem;
