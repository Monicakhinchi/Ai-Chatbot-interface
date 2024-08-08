import React from 'react';
import styles from './MainContent.module.css';

const MainContent = () => {
    return (
        <main>
            <section className={styles.introSection}>
                <h1>Welcome to Next.js AI Chatbot!</h1>
                <p>This is an open source AI chatbot app template built with Next.js, the Vercel AI SDK, and Vercel KV.</p>
                <p>It uses React Server Components to combine text with generative UI as output of the LLM. The UI state is synced through the SDK so the model is aware of your interactions as they happen.</p>
            </section>
            <section className={styles.actionsSection}>
                <div className={styles.actionButtons}>
                    <button>What are the<br /> trending memecoins today?</button>
                    <button>What is the price of<br /> $DOGE right now?</button>
                    <button>I would like to buy <br />42 $DOGE</button>
                    <button>What are some<br /> recent events about $DOGE?</button>
                </div>
                <div className={styles.messageBox}>
                    <input type="text" placeholder="Send a message..." />
                    <button className={styles.sendButton}>Send</button>
                </div>
            </section>
        </main>
    );
};

export default MainContent;
