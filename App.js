import React from 'react';

import configureStore from './src/redux/store';
import { Provider } from "react-redux";
import RootNavigator from './src/routes/RootNavigator';


const store = configureStore()
function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;