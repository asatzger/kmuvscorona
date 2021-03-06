import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import 'react-mde/lib/styles/css/react-mde-all.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Security } from '@okta/okta-react';

const oktaConfig = {
  issuer: `https://dev-388005.okta.com/oauth2/default`,
  redirect_uri: `${window.location.origin}/implicit/callback`,
  client_id: "0oa4swbm2bNk0Lyhq4x6",
};


ReactDOM.render(
	<BrowserRouter>
    <Security {...oktaConfig}>
	<App />
	 </Security>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


if (module.hot) module.hot.accept();