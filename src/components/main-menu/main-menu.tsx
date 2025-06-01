import React, { useState } from 'react';
import Logo from '../../assets/image/logo.png'
import styles from './main-menu.module.css'

const MainMenu = () => {
    const [activeTab, setActiveTab] = useState<'playVsAi' | 'playOnline' | 'localMultiplayer' | 'settings' | 'rules'>('playVsAi');

    return (
        <header className={styles.appHeader}>
            <img src={Logo} alt="Logo" />
            <nav className={styles.appNav}>
                <button
                    className={`${styles.navButton} ${activeTab === 'playVsAi' ? styles.active : ''}`}
                    onClick={() => setActiveTab('playVsAi')}
                >
                    Play vs AI
                </button>
                <button
                    className={`${styles.navButton} ${activeTab === 'playOnline' ? styles.active : ''}`}
                    onClick={() => setActiveTab('playOnline')}
                >
                    Play Online
                </button>
                <button
                    className={`${styles.navButton} ${activeTab === 'localMultiplayer' ? styles.active : ''}`}
                    onClick={() => setActiveTab('localMultiplayer')}
                >
                    Local Multiplayer
                </button>
                <button
                    className={`${styles.navButton} ${activeTab === 'rules' ? styles.active : ''}`}
                    onClick={() => setActiveTab('rules')}
                >
                    Rules
                </button>
                <button
                    className={`${styles.navButton} ${activeTab === 'settings' ? styles.active : ''}`}
                    onClick={() => setActiveTab('settings')}
                >
                    Settings
                </button>
            </nav>
        </header>
    );
};

export default MainMenu;
