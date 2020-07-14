import React from 'react';
import {Divider, List} from '@material-ui/core';
import ITypography from './ITypography';
import {StringsJson} from '../../utils/types';

const strings: StringsJson = {
    emptyList: {
        en: 'List is empty',
        fa: 'داده‌ای جهت نمایش موجود نیست',
    },
};

interface IListProps {
    data: any[];
    itemComponent: React.ComponentType<any>;
}

const IList = ({data, itemComponent: ItemComponent}: IListProps) => {
    return (
        <List component="nav" className="col-12 border">
            {data.length === 0 ? (
                <ITypography
                    variant="subtitle2"
                    text={strings.emptyList}
                    color="textSecondary"
                    align="center"
                />
            ) : (
                data.map((item, index) => (
                    <>
                        {index > 0 && (
                            <Divider key={'d' + (item.id || index)} />
                        )}
                        <ItemComponent key={item.id || index} item={item} />
                    </>
                ))
            )}
        </List>
    );
};

export default IList;
