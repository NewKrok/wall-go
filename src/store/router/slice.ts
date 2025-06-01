import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RouterState } from '../../types';

const initialState: RouterState = {
  currentPath: '/',
};

export const routerSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    setCurrentPath: (state, action: PayloadAction<string>) => {
      state.currentPath = action.payload;
    },
  },
});

export const { setCurrentPath } = routerSlice.actions;

export default routerSlice.reducer;
