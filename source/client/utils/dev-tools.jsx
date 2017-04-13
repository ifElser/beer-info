import React from 'react';
import { createStore as initialCreateStore, compose } from 'redux';

export let createStore = initialCreateStore;

// if (__DEVELOPMENT__) {
//   let {createDevTools, persistState} = require('redux-devtools');
//   createStore = compose(
//     (),
//     persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
//     createStore
//   );
// }

export function renderDevTools(store) {
  if (__DEVELOPMENT__) {
    let {createDevTools, DevTools, DebugPanel, LogMonitor} = require('redux-devtools');
    return createDevTools(
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }
  return null;
}
