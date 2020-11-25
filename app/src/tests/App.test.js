import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App.js';


// Default rendering test for the App core
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});