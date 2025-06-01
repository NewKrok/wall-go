import React from 'react';
import Logo from '../../assets/image/logo.png'
import styles from './main-menu.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getSelectCurrentPath } from 'store/router/router-selectors';
import { setCurrentPath } from 'store/router/slice';

const MainMenu = () => {
    const dispatch = useDispatch();
    const currentPath = useSelector(getSelectCurrentPath);

    const navigate = (tab: string) =>
        dispatch(setCurrentPath(tab));

    return (
        <header className={styles.appHeader}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            <nav className={styles.appNav}>
                <button
                    className={`${styles.navButton} ${currentPath === 'playVsAi' ? styles.active : ''}`}
                    onClick={() => navigate('playVsAi')}
                >
                    Play vs AI
                </button>
                <button
                    className={`${styles.navButton} ${currentPath === 'playOnline' ? styles.active : ''}`}
                    onClick={() => navigate('playOnline')}
                >
                    Play Online
                </button>
                <button
                    className={`${styles.navButton} ${currentPath === 'localMultiplayer' ? styles.active : ''}`}
                    onClick={() => navigate('localMultiplayer')}
                >
                    Local Multiplayer
                </button>
                <button
                    className={`${styles.navButton} ${currentPath === 'rules' ? styles.active : ''}`}
                    onClick={() => navigate('rules')}
                >
                    Rules
                </button>
                <button
                    className={`${styles.navButton} ${currentPath === 'settings' ? styles.active : ''}`}
                    onClick={() => navigate('settings')}
                >
                    Settings
                </button>
            </nav>
        </header>
    );
};

export default MainMenu;
