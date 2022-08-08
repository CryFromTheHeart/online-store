import React from 'react';
import ReactDOM from 'react-dom';
import init from './init';
import './main.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = async () => {
  const root = document.getElementById('root');
  const vdom = await init();
  ReactDOM.render(<React.StrictMode>{vdom}</React.StrictMode>, root);
};

app();
