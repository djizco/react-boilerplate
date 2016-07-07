import React      from 'react';
import routes     from './config/routes.js';
import styles     from './main.css';
import { render } from 'react-dom';
import favicon    from './assets/icons/favicon.ico';

render(routes, document.getElementById('app'));
