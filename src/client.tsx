import React, { useEffect } from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import * as Sentry from '@sentry/react';
//import { initFullStory } from 'common/fullstory';
import { loadableReady } from '@loadable/component';

import './index.css';

import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { trackWebVitals } from './components/Analytics';
import RenderContext, { RenderType } from './contexts/RenderContext';

Sentry.init({
  // list of community compiled ignore errors + deny urls to help declutter sentry.
  ignoreErrors: [
    // Ignoring cancelled API requests.  We should improve error handling in
    // src/api/index.ts, but cancelled error messages are crowding sentry.
    'TypeError: cancelled',
  ],
  denyUrls: [
    // Chrome extensions
    /extensions\//i,
    /^chrome:\/\//i,
  ],
  dsn:
    'https://4e1fa0b7df4d490488847bcc7966712b@o378922.ingest.sentry.io/5444052',
  // Adding sampling to sentry errors to reduce volume. After cleaning up more sentry errors
  // (https://trello.com/c/0LGQjmdw), should be able to remove this.
  sampleRate: 0.5,
});

// function Main() {
//   /*useEffect(() => {
//     const jssStyles = document.querySelector('#jss-server-side');
//     jssStyles?.parentElement?.removeChild(jssStyles);
//   }, []);*/
//   return (
//     <RenderContext.Provider value={{ type: RenderType.Client }}>
//       <App />
//     </RenderContext.Provider>
//   );
// }

loadableReady(() => {
  const app = (
    <RenderContext.Provider value={{ type: RenderType.Client }}>
      <App />
    </RenderContext.Provider>
  );
  hydrate(app, document.getElementById('root'));
});

if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

reportWebVitals(trackWebVitals);
