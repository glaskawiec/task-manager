import React from 'react';
import ReactDOM from 'react-dom';
import { HouxProvider } from 'houx';
import { configure } from '@testing-library/react';
import * as serviceWorker from './serviceWorker';
import App from './App';
import reducers from './flux/reducers';

configure({ testIdAttribute: 'data-testid' });

ReactDOM.render(
  <HouxProvider logDispatchedActions reducers={reducers}>
    <App />
  </HouxProvider>, document.getElementById('root'),
);

serviceWorker.unregister();
