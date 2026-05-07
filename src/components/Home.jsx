import React from 'react';
import styles from "../css/Home.module.css"

export const Home = () => {
  return (
    <div className={styles.container}>
        <div>
          <header>
            <h1 className={styles.h1}>Bienvenido a Recetas YA</h1>
        </header>
        <main>
            <h2 className={styles.h2}>En recetas ya encontraras varias recetas para que disfrutes</h2>
        </main>
        </div>
    </div>
  )
}
