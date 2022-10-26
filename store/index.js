import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import tutorial from '../pages/reduxExample/slice';
import logger from 'redux-logger';

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...[require('redux-immutable-state-invariant').default(), logger]),
  devTools: true,
});
