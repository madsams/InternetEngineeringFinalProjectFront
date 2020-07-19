import React from 'react';
import {ListItem, ListItemText, Typography} from '@material-ui/core';
import {Form, StringsJson} from '../../utils/types';
import {Link} from 'react-router-dom';
import {FORM_TABLE} from './paths';
import ITypography from '../utils/ITypography';
import {concatStrWithLangBaseJson} from '../../utils/funstions';

interface FormsListItemProps {
    item: Form;
}

const strings: StringsJson = {
    answersCount: {
        en: ' answers',
        fa: ' پاسخ‌',
    },
};

const CentreFormListItem = ({item}: FormsListItemProps) => (
    <Link to={FORM_TABLE(item.id)} className="text-decoration-none">
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
                    text={concatStrWithLangBaseJson(
                        strings.answersCount,
                        '' + item.answersCount,
                    )}
                    align="right"
                    variant="overline"
                    color="textSecondary"
                />
            </ListItemText>
        </ListItem>
    </Link>
);

export default CentreFormListItem;
