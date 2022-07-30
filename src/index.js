import ReactDOM from 'react-dom/client';
import React from 'react';
import init from './init.jsx';
import './main.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const vdom = await init();
  root.render(<React.StrictMode>{vdom}</React.StrictMode>);
};

app();
