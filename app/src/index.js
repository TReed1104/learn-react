import React from 'react';
import ReactDOM from 'react-dom';

import './assets/app.sass'

import App from './components/App.js';

const title = 'Template React Project';

ReactDOM.render(
    <App title={title} />,
    document.getElementById('app')
);
