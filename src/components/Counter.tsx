import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { asyncIncrement, asyncDecrement } from '../store/counter/actions';
import styles from './Counter.module.css';

const Counter: React.FC = () => {
  const { value, isLoading } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.counter}>
      <h2>Async Counter with Redux Saga</h2>
      <p className={styles.value}>Current value: {value}</p>
      
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => dispatch(asyncIncrement())}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Async Increment'}
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(asyncDecrement())}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Async Decrement'}
        </button>
      </div>
      
      {isLoading && <p className={styles.loading}>Processing...</p>}
    </div>
  );
};

export default Counter;
