import { createAction } from '@reduxjs/toolkit';
import { increment, decrement, incrementByAmount } from './slice';

// Re-export the slice actions
export { increment, decrement, incrementByAmount };

// Define saga action types
export const ASYNC_INCREMENT = 'counter/ASYNC_INCREMENT';
export const ASYNC_DECREMENT = 'counter/ASYNC_DECREMENT';

// Define saga actions
export const asyncIncrement = createAction(ASYNC_INCREMENT);
export const asyncDecrement = createAction(ASYNC_DECREMENT);
