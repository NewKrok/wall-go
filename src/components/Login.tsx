import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { loginRequestSaga } from '../store/auth/actions';
import styles from './Login.module.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const { isLoading, error, isAuthenticated, user } = useAppSelector(state => state.auth);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginRequestSaga({ username, password }));
  };

  if (isAuthenticated && user) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.welcomeMessage}>
          <h2>Welcome, {user.username}!</h2>
          <p>You are now logged in.</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2>Login</h2>
        
        {error && <div className={styles.error}>{error}</div>}
        
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
            placeholder="Try: admin"
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            placeholder="Try: password"
            required
          />
        </div>
        
        <button 
          type="submit" 
          className={styles.loginButton}
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        
        <div className={styles.hint}>
          <small>Hint: Use username "admin" and password "password"</small>
        </div>
      </form>
    </div>
  );
};

export default Login;
