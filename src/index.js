// Hotjar Tracking Code for https://money-tracker-8lcv.vercel.app/
(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = { hjid: 5227678, hjsv: 6 };
  a = o.getElementsByTagName('head')[0];
  r = o.createElement('script');
  r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

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

const store = configureStore();
const history = createBrowserHistory();
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Root store={store} history={history} />);

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
