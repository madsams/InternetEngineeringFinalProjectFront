import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducer as toastrReducer} from 'react-redux-toastr';
import {languagesReducers, roleReducer, tokenReducer} from './utils/reducers';
import {setStorage} from './utils/effects/storage';

const rootReducer = combineReducers({
    toastr: toastrReducer,
    language: languagesReducers,
    token: tokenReducer,
    role: roleReducer,
});

const middlewares = [thunk];
if (process.env.NODE_ENV === `development`) {
    const {logger} = require(`redux-logger`);
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const saveStateToStorage = (key: string) => {
    const state = store.getState();
    // @ts-ignore
    setStorage(key, state[key]);
};

store.subscribe(() => {
    saveStateToStorage('language');
    saveStateToStorage('token');
    saveStateToStorage('role');
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
