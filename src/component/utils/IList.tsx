import React from 'react';
import {Divider, List} from '@material-ui/core';
import ILoadingChecker from './ILoadingChecker';
import IEmptyChecker from './IEmptyChecker';
import {ISimpleAction, IThunkAction} from '../../utils/types';
import IFailedChecker from './IFailedChecker';

interface IListProps {
    data: any[];
    itemComponent: React.ComponentType<any>;
    isLoading: boolean;
    isFailed: boolean;

    reloadAction(): IThunkAction | ISimpleAction;
}

const IList = ({
    data,
    itemComponent: ItemComponent,
    isLoading,
    isFailed,
    reloadAction,
}: IListProps) => {
    return (
        <List component="nav" className="col-12 border">
            <ILoadingChecker isLoading={isLoading}>
                <IFailedChecker isFailed={isFailed} reloadAction={reloadAction}>
                    <IEmptyChecker data={data}>
                        <>
                            {data.map((item, index) => (
                                <>
                                    {index > 0 && (
                                        <Divider
                                            key={'d' + (item.id || index)}
                                        />
                                    )}
                                    <ItemComponent
                                        key={item.id || index}
                                        item={item}
                                    />
                                </>
                            ))}
                        </>
                    </IEmptyChecker>
                </IFailedChecker>
            </ILoadingChecker>
        </List>
    );
};

export default IList;
