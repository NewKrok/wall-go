import { useSelector, TypedUseSelectorHook } from 'react-redux';
import type { StoreState } from '../store';

// Use throughout your app instead of plain `useSelector`
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;
