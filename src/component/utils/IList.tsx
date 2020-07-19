import React from 'react';
import {Divider, List} from '@material-ui/core';
import ILoader from './ILoader';
import IEmptyChecker from './IEmptyChecker';

interface IListProps {
    data: any[];
    itemComponent: React.ComponentType<any>;
    isLoading: boolean;
    isFailed: boolean;
}

const IList = ({
    data,
    itemComponent: ItemComponent,
    isLoading,
    isFailed,
}: IListProps) => {
    return (
        <List component="nav" className="col-12 border">
            <ILoader isLoading={isLoading}>
                <IEmptyChecker data={data}>
                    <>
                        {data.map((item, index) => (
                            <>
                                {index > 0 && (
                                    <Divider key={'d' + (item.id || index)} />
                                )}
                                <ItemComponent
                                    key={item.id || index}
                                    item={item}
                                />
                            </>
                        ))}
                    </>
                </IEmptyChecker>
            </ILoader>
        </List>
    );
};

export default IList;
