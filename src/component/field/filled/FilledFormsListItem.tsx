import React from 'react';
import {ListItem, ListItemText, Typography} from '@material-ui/core';
import {FilledForm} from '../../../utils/types';
import {formatTimeAgo} from '../../../utils/funstions';
import ITypography from '../../utils/ITypography';

interface FormsListItemProps {
    item: FilledForm;
}

const FilledFormsListItem = ({item}: FormsListItemProps) => (
    <ListItem button component="a" href={`/form/filled/${item.id}`}>
        <ListItemText className="col-4">
            <Typography variant="overline" align="left">
                {item.id}:
            </Typography>
        </ListItemText>
        <ListItemText className="col-4">
            <Typography align="center">{item.title}</Typography>
        </ListItemText>
        <ListItemText className="col-4">
            <ITypography
                text={formatTimeAgo(item.filledAt)}
                align="right"
                variant="overline"
            />
        </ListItemText>
    </ListItem>
);

export default FilledFormsListItem;
