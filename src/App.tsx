import React from 'react';
import styles from './App.module.css';
import MainMenu from './components/main-menu/main-menu';

const App: React.FC = () => {


  return (
    <div className={styles.app}>
      <MainMenu />

      {/* <main className={styles.appMain}>
         {activeTab === 'counter' ? <Counter /> : <Login />} 
      </main>
      <footer className={styles.appFooter}>
        <p>Built with React, Redux, Redux Saga and TypeScript</p>
      </footer> */}
    </div>
  );
};

export default App;
