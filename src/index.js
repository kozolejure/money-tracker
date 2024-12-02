import { createBrowserHistory } from 'history';
import React from 'react';
import { createRoot } from 'react-dom/client';
import * as Sentry from '@sentry/browser';
import 'semantic-ui-css/semantic.min.css';
import Root from './containers/Root';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import Hotjar from '@hotjar/browser';

Sentry.init({
  dsn: 'https://5ae855d4c1d840c1b06679123069574f@sentry.io/1335198'
});

const siteId = 5227678;
const hotjarVersion = 6;
const store = configureStore();
const history = createBrowserHistory();
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Root store={store} history={history} />);

registerServiceWorker();
Hotjar.init(siteId, hotjarVersion);

if (module.hot) {
  module.hot.accept();
}
