import React from 'react';
import { YMaps } from 'react-yandex-maps';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './slices';

const init = async () => {
  return (
    <Provider store={store}>
      <YMaps>
        <App />
      </YMaps>
    </Provider>
  );
};

export default init;
