import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import counterReducer from './counter/slice';
import routerReducer from './router/slice';
import { counterSaga } from './counter/sagas';
import { RootState } from '../types';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Root saga
function* rootSaga() {
  yield all([
    fork(counterSaga),
    // Add other sagas here
  ]);
}

// Configure the store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    router: routerReducer,
    // Add other reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Run the saga
sagaMiddleware.run(rootSaga);

// Export types
export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Ensure our store state matches our RootState type
export const selectState = (state: StoreState): RootState => state;
