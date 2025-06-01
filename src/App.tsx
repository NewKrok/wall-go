import React, { useState } from 'react';
import Counter from './components/Counter';
import Login from './components/Login';
import styles from './App.module.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'counter' | 'login'>('counter');

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1>React Redux Saga with TypeScript</h1>
        <nav className={styles.appNav}>
          <button 
            className={`${styles.navButton} ${activeTab === 'counter' ? styles.active : ''}`}
            onClick={() => setActiveTab('counter')}
          >
            Counter Demo
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'login' ? styles.active : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login Demo
          </button>
        </nav>
      </header>
      <main className={styles.appMain}>
        {activeTab === 'counter' ? <Counter /> : <Login />}
      </main>
      <footer className={styles.appFooter}>
        <p>Built with React, Redux, Redux Saga and TypeScript</p>
      </footer>
    </div>
  );
};

export default App;
