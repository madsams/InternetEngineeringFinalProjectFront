import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducer as toastrReducer} from 'react-redux-toastr';

const rootReducer = combineReducers({toastr: toastrReducer});

const middlewares = [thunk];
if (process.env.NODE_ENV === `development`) {
    const {logger} = require(`redux-logger`);
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

export type RootState = ReturnType<typeof rootReducer>;
