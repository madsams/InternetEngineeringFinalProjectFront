import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducer as toastrReducer} from 'react-redux-toastr';
import {languagesReducers, roleReducer} from './utils/reducers';
import {setStorage} from './utils/effects/storage';
import fieldReducer from './component/fieldAgent/reducer';
import centreReducer from './component/centreAgent/reducer';
import {runInDevelopment} from './utils/funstions';
import loginReducer from './component/login/reducers';

const rootReducer = combineReducers({
    toastr: toastrReducer,
    language: languagesReducers,
    role: roleReducer,
    field: fieldReducer,
    centre: centreReducer,
    login: loginReducer,
});

const middlewares = [thunk];

runInDevelopment(() => {
    const {logger} = require(`redux-logger`);
    middlewares.push(logger);
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const saveStateToStorage = (key: string) => {
    const state = store.getState();
    // @ts-ignore
    setStorage(key, state[key]);
};

store.subscribe(() => {
    saveStateToStorage('language');
    saveStateToStorage('role');
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
