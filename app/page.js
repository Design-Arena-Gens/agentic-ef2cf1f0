'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [isSwapping, setIsSwapping] = useState(false);
  const [characters, setCharacters] = useState(['🦁', '🐯']);

  const handleSwap = () => {
    setIsSwapping(true);
    setTimeout(() => {
      setCharacters([characters[1], characters[0]]);
      setIsSwapping(false);
    }, 600);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Character Swap Animation</h1>
      <div className={styles.container}>
        <div className={`${styles.character} ${styles.left} ${isSwapping ? styles.swapLeft : ''}`}>
          {characters[0]}
        </div>
        <div className={`${styles.character} ${styles.right} ${isSwapping ? styles.swapRight : ''}`}>
          {characters[1]}
        </div>
      </div>
      <button
        className={styles.button}
        onClick={handleSwap}
        disabled={isSwapping}
      >
        {isSwapping ? 'Swapping...' : 'Swap Characters'}
      </button>
      <div className={styles.controls}>
        <input
          type="text"
          maxLength="2"
          placeholder="Left char"
          className={styles.input}
          value={characters[0]}
          onChange={(e) => setCharacters([e.target.value || '🦁', characters[1]])}
        />
        <input
          type="text"
          maxLength="2"
          placeholder="Right char"
          className={styles.input}
          value={characters[1]}
          onChange={(e) => setCharacters([characters[0], e.target.value || '🐯'])}
        />
      </div>
    </main>
  );
}
