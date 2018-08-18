import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import './axiosConfig'; 
import Main from './containers/Main.js';
import './assets/styles/Main.scss';

ReactDOM.render(<Provider store={store}><Main /></Provider>,
    document.getElementById('root')
);