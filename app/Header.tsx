"use client";

import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <a href="#" className={styles.logo}>Next.js AI Chatbot</a>
            <div className={styles.buttons}>
                <a href="#" className={styles.githubButton}>GitHub</a>
                <a href="#" className={styles.deployButton}>Deploy to Vercel</a>
            </div>
        </header>
    );
};

export default Header;
