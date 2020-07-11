import React from 'react';
import renderToast, {ToastTypes} from "../utils/actions/renderToast";

function App() {
  return (
      <div onClick={() => renderToast('test', 'this is a test', ToastTypes.SUCCESS)}>empty</div>
  );
}

export default App;
