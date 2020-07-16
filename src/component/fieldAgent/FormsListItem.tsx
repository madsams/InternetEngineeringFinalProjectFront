import React from 'react';
import {ListItem, ListItemText, Typography} from '@material-ui/core';
import {Form} from '../../utils/types';
import {Link} from 'react-router-dom';
import {FORMS_DETAIL} from './paths';

interface FormsListItemProps {
    item: Form;
}

const FormsListItem = ({item}: FormsListItemProps) => (
    <Link to={FORMS_DETAIL(item.id)} className="text-decoration-none">
        <ListItem button component="div">
            <ListItemText className="position-absolute">
                <Typography variant="overline" color="textSecondary">
                    {item.id}:
                </Typography>
            </ListItemText>
            <ListItemText>
                <Typography className="text-center" color="textPrimary">
                    {item.title}
                </Typography>
            </ListItemText>
        </ListItem>
    </Link>
);

export default FormsListItem;
