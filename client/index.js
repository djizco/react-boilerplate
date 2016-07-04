import React    from 'react';
import {render} from 'react-dom';
import routes   from './config/routes.js';
import styles   from './main.css';

render(routes, document.getElementById('app'));
