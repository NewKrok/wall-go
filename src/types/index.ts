// Store types
export interface RootState {
  counter: CounterState;
  // Add other state slices here as the application grows
}

// Counter feature types
export interface CounterState {
  value: number;
  isLoading: boolean;
}

// API response types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// Action types
export interface Action<T = any> {
  type: string;
  payload?: T;
}

export interface ActionWithPayload<T> extends Action {
  payload: T;
}
