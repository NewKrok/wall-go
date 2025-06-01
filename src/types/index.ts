// Store types
export interface RootState {
  counter: CounterState;
  router: RouterState;
  // Add other state slices here as the application grows
}

// Router feature types
export interface RouterState {
  currentPath: string;
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
