import { createStore } from "redux";
import { persistStore } from 'redux-persist';

import reducer from './reducer';

export const store = createStore(reducer);

export const persistor = persistStore(store);
