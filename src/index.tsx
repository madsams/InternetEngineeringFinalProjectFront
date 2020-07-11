import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import store from "./store";
import {Provider} from "react-redux";
import ReduxToastr from "react-redux-toastr";
import {CssBaseline} from "@material-ui/core";
import theme from "./theme";
import {ThemeProvider} from "@material-ui/styles";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Provider store={store}>
              <ReduxToastr
                  timeOut={3000}
                  position="top-right"
                  transitionIn="fadeIn"
                  transitionOut="fadeOut"
                  closeOnToastrClick
              />
              <App/>
          </Provider>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
