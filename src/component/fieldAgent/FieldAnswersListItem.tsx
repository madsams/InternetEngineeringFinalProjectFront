import React from 'react';
import {ListItem, ListItemText, Typography} from '@material-ui/core';
import {FormAnswer} from '../../utils/types';
import {formatTimeAgo} from '../../utils/funstions';
import ITypography from '../utils/ITypography';
import {Link} from 'react-router-dom';
import {FORM_ANSWERS_DETAIL} from './paths';

interface FormsListItemProps {
    item: FormAnswer;
}

const FilledFormsListItem = ({item}: FormsListItemProps) => (
    <Link to={FORM_ANSWERS_DETAIL(item.id)} className="text-decoration-none">
        <ListItem button component="div">
            <ListItemText className="col-6">
                <Typography align="center" color="textPrimary">
                    {item.title}
                </Typography>
            </ListItemText>
            <ListItemText className="col-6">
                <ITypography
                    text={formatTimeAgo(item.createdAt)}
                    align="right"
                    variant="overline"
                    color="textSecondary"
                />
            </ListItemText>
        </ListItem>
    </Link>
);

export default FilledFormsListItem;
