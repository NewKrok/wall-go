import { put, takeEvery, delay } from 'redux-saga/effects';
import { increment, decrement, setLoading } from './slice';
import { ASYNC_INCREMENT, ASYNC_DECREMENT } from './actions';

// Worker Sagas
function* handleAsyncIncrement() {
  try {
    yield put(setLoading(true));
    // Simulate API call with delay
    yield delay(1000);
    yield put(increment());
  } finally {
    yield put(setLoading(false));
  }
}

function* handleAsyncDecrement() {
  try {
    yield put(setLoading(true));
    // Simulate API call with delay
    yield delay(1000);
    yield put(decrement());
  } finally {
    yield put(setLoading(false));
  }
}

// Watcher Saga
export function* counterSaga() {
  yield takeEvery(ASYNC_INCREMENT, handleAsyncIncrement);
  yield takeEvery(ASYNC_DECREMENT, handleAsyncDecrement);
}
