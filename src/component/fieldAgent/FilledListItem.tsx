import React from 'react';
import {ListItem, ListItemText, Typography} from '@material-ui/core';
import {FilledForm} from '../../utils/types';
import {formatTimeAgo} from '../../utils/funstions';
import ITypography from '../utils/ITypography';
import {Link} from 'react-router-dom';

interface FormsListItemProps {
    item: FilledForm;
}

const FilledFormsListItem = ({item}: FormsListItemProps) => (
    <Link to={`/form/filled/${item.id}`} className="text-decoration-none">
        <ListItem button component="div">
            <ListItemText className="col-4">
                <Typography
                    variant="overline"
                    align="left"
                    color="textSecondary">
                    {item.id}:
                </Typography>
            </ListItemText>
            <ListItemText className="col-4">
                <Typography align="center" color="textPrimary">
                    {item.title}
                </Typography>
            </ListItemText>
            <ListItemText className="col-4">
                <ITypography
                    text={formatTimeAgo(item.filledAt)}
                    align="right"
                    variant="overline"
                    color="textSecondary"
                />
            </ListItemText>
        </ListItem>
    </Link>
);

export default FilledFormsListItem;
