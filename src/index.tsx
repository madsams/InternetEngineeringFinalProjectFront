import React from 'react';
import ReactDOM from 'react-dom';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import {Provider} from 'react-redux';
import DoubleDirectionProvider from './component/utils/DoubleDirectionProvider';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <DoubleDirectionProvider>
                <App />
            </DoubleDirectionProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
