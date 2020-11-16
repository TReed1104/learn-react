import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';

const title = 'Learn React';

ReactDOM.render(
    <App title={title} />,
    document.getElementById('app')
);

module.hot.accept();
