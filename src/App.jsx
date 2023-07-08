import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import MyRoutes from './MyRoutes';
import { itemReducer } from './Reducers/itemReducer';
import { cartReducers } from './Reducers/cartReducers';

const App = () => {
  const persistConfig = {
    key: 'root',
    storage
  };

  const rootReducer = combineReducers({
    itemStore: itemReducer,
    itemCart: cartReducers
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const myStore = createStore(persistedReducer);
  const persistor = persistStore(myStore);

  return (
    <div>
      <Provider store={myStore}>
        <PersistGate loading={null} persistor={persistor}>
          <MyRoutes />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
