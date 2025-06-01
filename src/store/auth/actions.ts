import { createAction } from '@reduxjs/toolkit';
import { loginRequest, loginSuccess, loginFailure, logout, LoginPayload } from './slice';

// Re-export the slice actions
export { loginRequest, loginSuccess, loginFailure, logout };

// Define saga action types
export const LOGIN_REQUEST_SAGA = 'auth/LOGIN_REQUEST_SAGA';
export const LOGOUT_SAGA = 'auth/LOGOUT_SAGA';

// Define saga actions
export const loginRequestSaga = createAction<LoginPayload>(LOGIN_REQUEST_SAGA);
export const logoutSaga = createAction(LOGOUT_SAGA);
