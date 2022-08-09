import React from 'react';
import { YMaps } from 'react-yandex-maps';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './slices';

const init = async () => (
  <Provider store={store}>
    <YMaps>
      <App />
    </YMaps>
  </Provider>
);

export default init;
