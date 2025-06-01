import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { LoginPayload, User, loginRequest, loginSuccess, loginFailure, logout } from './slice';
import { LOGIN_REQUEST_SAGA, LOGOUT_SAGA } from './actions';

// Mock API function for login
const loginApi = async (username: string, password: string): Promise<{ user: User; token: string }> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock authentication logic
  if (username === 'admin' && password === 'password') {
    return {
      user: {
        id: '1',
        username: 'admin',
        email: 'admin@example.com',
      },
      token: 'mock-jwt-token',
    };
  }
  
  throw new Error('Invalid credentials');
};

// Worker Sagas
function* handleLogin(action: PayloadAction<LoginPayload>) {
  try {
    yield put(loginRequest(action.payload));
    
    // Call the API
    const response: { user: User; token: string } = yield call(
      loginApi,
      action.payload.username,
      action.payload.password
    );
    
    // Dispatch success action
    yield put(loginSuccess(response));
    
    // Store token in localStorage
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
  } catch (error) {
    // Dispatch failure action
    yield put(loginFailure(error instanceof Error ? error.message : 'Login failed'));
  }
}

function* handleLogout() {
  try {
    // Remove token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Dispatch logout action
    yield put(logout());
  } catch (error) {
    console.error('Logout error:', error);
  }
}

// Watcher Saga
export function* authSaga() {
  yield takeLatest(LOGIN_REQUEST_SAGA, handleLogin);
  yield takeLatest(LOGOUT_SAGA, handleLogout);
}
