import React from 'react';
import ReactDOM from 'react-dom';

import './assets/app.sass'

import App from './components/App.js';

const title = 'Learn React';

ReactDOM.render(
    <App title={title} />,
    document.getElementById('app')
);
