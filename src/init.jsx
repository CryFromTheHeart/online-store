import React from 'react';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './slices';

const init = async () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default init;
