import * as $ from 'react-exo/redux';
import {KV} from 'react-exo/kv';
import {PageLoading} from 'app/base/PageLoading';
import config from 'config';

import app from './app';
import files from 'media/files/store';
import settings from 'settings/store';

// https://redux-toolkit.js.org/tutorials/rtk-query/#wrap-your-application-with-the-provider
export function Store(props: React.PropsWithChildren) {
  return (
    <$.Provider store={store} loading={<PageLoading/>}>
      {props.children}
    </$.Provider>
  )
}

// https://github.com/rt2zz/redux-persist
const reducer = $.persistReducer({
  key: config.APP_NAME,
  version: config.STORE_VERSION,
  storage: KV.init(`${config.APP_NAME}::redux`, config.STORE_VERSION),
  blacklist: [
    $.history.context.routerReducer.name,
    app.reducer.name,
  ],
}, $.combineReducers({
  router: $.history.context.routerReducer,
  app: app.reducer,
  files: files.reducer,
  settings: settings.reducer,
}));

// https://redux.js.org/usage/configuring-your-store
const store = $.configureStore({
  reducer,
  devTools: __DEV__,
  middleware: () => new $.Tuple(
    $.history.context.routerMiddleware,
  ),
});

// https://github.com/salvoravida/redux-first-history
$.history.init(store);

export type State = ReturnType<typeof store.getState>
export const history = $.history.state;
export default store;
