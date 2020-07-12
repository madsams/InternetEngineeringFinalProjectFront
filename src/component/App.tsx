import React from 'react';
import switchDir from "../utils/effects/switchDir";
import {useDispatch} from "react-redux";
import {TextField} from "@material-ui/core";
import IThemeProvider from "./IThemeProvider";

function App() {
    const dispatch = useDispatch();

    return (
        <IThemeProvider>
            <div className='p-4'>
                <div onClick={() => dispatch(switchDir())}>Change the direction</div>
                <TextField id="standard-basic" label="Standard" placeholder='koft'/>
            </div>
        </IThemeProvider>
  );
}

export default App;
