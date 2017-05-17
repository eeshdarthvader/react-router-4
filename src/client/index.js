/**
 * index.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
import { render } from 'react-dom';
import React from 'react';
import App from '../shared/App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'whatwg-fetch';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

render((
    <Router>
        <App gists={window.__gists__} />
    </Router>
), document.getElementById('app'));
